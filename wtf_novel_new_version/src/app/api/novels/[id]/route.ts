import Novel from "@/models/Novel";
import Author from "@/models/Author";
import Chapter from "@/models/Chapter";
import Genre from "@/models/Genre";
import Like from "@/models/Like";
import { connectToDatabase } from "@/lib/mongodb";
import mongoose from "mongoose";
import Like from "@/models/Like";
import ReadingProgress from "@/models/ReadingProgress";
import Review from "@/models/Review";
import Slider from "@/models/Slider"; // Assuming Slider has novelId ref
import { ourFileRouter } from "@/app/api/uploadthing/route"; // Corrected import path
import { UploadThingError, handleUpload, deleteFiles } from "uploadthing/server"; // Import deleteFiles and UploadThingError
import { z } from "zod";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server"; // Keep this import for NextResponse type
// import { uploadFileToDrive, deleteFileFromDrive } from '@/lib/googleDriveUtils'; // Import Google Drive utility functions
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return createErrorResponse("Unauthorized", 401);
  }

  const novelId = params.id;
  const formData = await req.formData(); // Use formData to handle file uploads

  try { // Outer try...catch for database connection and initial checks
 await connectToDatabase();

 // Define Zod schema for update data (most fields are optional)
 const updateNovelSchema = z.object({
      title: z.string().optional(),
      summary: z.string().optional(),
      status: z.string().optional(),
      genres: z.array(z.string()).optional(), // Assuming genres are sent as an array of strings
 chapters: z
 .array(
        z.object({
          // Assuming chapters update data is an array of objects
 _id: z.string().optional(), // Optional for new chapters
          title: z.string(),
        content: z.string().optional(), // Assuming content is URL if not file upload
        order: z.number(),
      })).optional(),
    });

    try {
 const updatedData = updateNovelSchema.parse(Object.fromEntries(formData.entries())); // Validate basic data first
    } catch (error: any) { // Specify error type
      if (error instanceof z.ZodError) {
        return createErrorResponse("Invalid input data", 400, error.errors);
      }
      throw error; // Re-throw if it's not a Zod error
    }

 // Start transaction
    const sessionDb = await mongoose.startSession();
 await sessionDb.startTransaction(); // Start transaction here
 // Define sessionDb here
    const novel = await Novel.findById(novelId);

    if (!novel) {
      return createErrorResponse("Novel not found", 404);
    }

    // Find the author associated with the novel for authorization
    const author = await Author.findById(novel.authorId);

    // Authorize user: must be the author of the novel or an admin
    if (
      session.user?.role !== 100 &&
      (!author || author.userId.toString() !== session.user?.id)
    ) {
      return createErrorResponse("Forbidden", 403); // Moved return inside the if block
    }

    // Handle file uploads before the database transaction if possible,
 // or ensure file deletions are part of the transaction logic.
 // For simplicity here, processing files within the transaction block.
 // Consider moving handleUpload outside if file processing is independent of DB state.
 try { // Inner try...catch for transaction
      // Update basic novel information based on validated data
      if (updatedData.summary !== undefined) novel.summary = updatedData.summary;
      if (updatedData.status) novel.status = updatedData.status;
      // Handle cover image and chapter content file uploads
      const files = await handleUpload({ // Assuming formData includes files with keys matching UploadThing routes
        config: ourFileRouter,
        req,
      });

      const coverImageFile = files?.find((file) => file.key.startsWith("novelImage"));
      // Handle cover image update
      if (coverImageFile) {
        // Delete the old cover image if it exists
 // Assuming novel.coverImage is the URL from UploadThing
 if (novel.coverImage) {
          const oldCoverImageKey = novel.coverImage.split('/').pop();
          if (oldCoverImageKey) await deleteFiles([oldCoverImageKey]);
        }
        // Update with the new cover image URL
        logger.info(`New cover image uploaded: ${coverImageFile.url}`);
        novel.coverImage = coverImageFile.url;
      }

 // Update basic novel information from validated data
 // Use updatedData which is already validated by Zod
      if (updatedData.title !== undefined) novel.title = updatedData.title;
      const updatedDataJson: any = Object.fromEntries(formData.entries()); // Convert formData to object for other fields
      // Handle genres update
      if (updatedDataJson.genres && Array.isArray(updatedDataJson.genres)) { // Use updatedDataJson
 // Assuming updatedData.genres contains an array of genre names or IDs
        // You'll need to fetch or create genre ObjectIds based on the input
        const genreObjectIds = await Promise.all(
          updatedDataJson.genres.map(async (genreName: string) => {
            const genre = await Genre.findOne({ name: genreName });
            if (genre) return genre._id;
            return null;
          })
        ).then((ids) => ids.filter((id) => id !== null));
 novel.genres = genreObjectIds; // Update genres with ObjectIds
      }
      // Handle chapters update
      if (updatedData.chapters && Array.isArray(updatedData.chapters)) {
        // This is a complex part and requires careful logic:
        // 1. Identify chapters to delete (present in DB but not in updatedData.chapters)
        // 2. Identify chapters to add (present in updatedData.chapters but not in DB)
        // 3. Identify chapters to update (present in both, but content or order changed)

        const existingChapters = await Chapter.find({ novelId: novelId }).session(sessionDb as any); // Cast session
        const existingChapterIds = existingChapters.map(chap => chap._id.toString());
        const updatedChapterIds = updatedData.chapters
 .map((chap: any) => chap._id);
        // Chapters to delete
        const chapterIdsToDelete = existingChapters.filter(chap => !updatedChapterIds.includes(chap._id.toString())).map(chap => chap._id); // Get ObjectIds to delete

        if (chapterIdsToDelete.length > 0) {
            const chaptersToDelete = await Chapter.find({ _id: { $in: chapterIdsToDelete } }).session(sessionDb as any); // Cast session
            const chapterFileKeysToDelete: string[] = [];
            chaptersToDelete.forEach(chap => {
                if (chap.content) {
                    const fileKey = chap.content.split('/').pop(); // Assuming URL format allows this
                    if (fileKey) chapterFileKeysToDelete.push(fileKey);
                }
            });
            if (chapterFileKeysToDelete.length > 0) { // Check if there are keys to delete
                try {
 await deleteFiles(chapterFileKeysToDelete);
 logger.info(`Deleted old chapter content files: ${chapterFileKeysToDelete.join(', ')}`);
                } catch (uploadThingError: any) { // Specify error type
 logger.error('Error deleting old chapter content files from UploadThing:', uploadThingError);
                }
            }
           await Chapter.deleteMany({ _id: { $in: chapterIdsToDelete } }, { session: sessionDb }); // Corrected deletion syntax
        }

        // Chapters to add or update
        for (const chapterData of updatedData.chapters) {
            if (chapterData._id && existingChapterIds.includes(chapterData._id.toString())) { // Check if ID exists and is in existing chapters
                // Update existing chapter
                const existingChapter = existingChapters.find(
 (chap) => chap._id.toString() === chapterData._id
                );
                if (existingChapter) {
                    // Handle chapter content update
                    const updatedChapterContentFile = files?.find(
 (file) => file.name === `chapterContent_${chapterData._id}` // Assuming file name convention
 );

                    if (updatedChapterContentFile) {
                        // Delete old content if it exists
 if (existingChapter.content) {
                            const oldChapterContentKey = existingChapter.content.split('/').pop();
                            if (oldChapterContentKey) await deleteFiles([oldChapterContentKey]);
                        }
                        existingChapter.content = updatedChapterContentFile.url;
                    } else if (chapterData.content !== undefined && existingChapter.content !== chapterData.content) {
                        // Optional: Delete old chapter content file from UploadThing
                        if (existingChapter.content) {
 const oldChapterContentKey = existingChapter.content.split('/').pop();
                            if (oldChapterContentKey) await deleteFiles([oldChapterContentKey]);
                        }
                        existingChapter.content = chapterData.content;
                    }
                    if (chapterData.title) existingChapter.title = chapterData.title;
                    if (chapterData.order !== undefined) existingChapter.order = chapterData.order;

                    await existingChapter.save({ session: sessionDb as any }); // Save the updated chapter
                }
            } else {
                // Ensure we only add if _id is NOT provided or is new
                if (!chapterData._id || !existingChapterIds.includes(chapterData._id.toString())) {
 // Find the uploaded file for this new chapter
 const newChapterContentFile = files?.find(
 (file) => file.name === `chapterContent_new_${chapterData.order}` // Assuming file name convention for new chapters
 );

                    const newContentUrl = newChapterContentFile ? newChapterContentFile.url : chapterData.content; // Use uploaded URL or provided URL

 // Ensure required fields for a new chapter are present
 if (!chapterData.title || !newContentUrl) {
 throw new Error(`Missing title or content for new chapter.`); // Throw error if content is not uploaded/provided
 };


                // Add new chapter
                const newChapter = new Chapter({
                    novelId: novel._id,
                    title: chapterData.title,
                    content: newContentUrl,
                    order: chapterData.order !== undefined ? chapterData.order : novel.chapterCount + 1, // Assign order if not provided
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
 await newChapter.save({ session: sessionDb as any }); // Save the new chapter
                }
            }

            }
        

        // Recalculate chapter count and update order based on new structure
        const finalChapters = await Chapter.find({ novelId: novelId }).sort({ order: 1 }).session(sessionDb);
        novel.chapterCount = finalChapters.length;
        // Update order sequence if necessary based on the sorted finalChapters
        for (let i = 0; i < finalChapters.length; i++) {
            if (finalChapters[i].order !== i + 1) {
                 finalChapters[i].order = i + 1;
                 await finalChapters[i].save({ session: sessionDb }); // Save the updated order
 };
 }
      }
      novel.updatedAt = new Date();
      await novel.save({ session: sessionDb as any }); // Cast session

      await (sessionDb as any).commitTransaction(); // Cast session
      await sessionDb.endSession();

      // Optional: Clean up any UploadThing files that were uploaded but not associated with the novel
      // This requires tracking which files were successfully associated vs uploaded.
      // For simplicity, skipping this complex cleanup here.

 return createJsonResponse({ message: "Novel updated successfully" }, 200);
    } catch (error: any) {
 logger.error('Update novel error:', error); // Log the error
      await sessionDb.abortTransaction();
      sessionDb.endSession();
 throw error; // Re-throw to be caught by the outer catch block
    }
 }
}
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return createErrorResponse("Unauthorized", 401);
  }

  const novelId = params.id;

  try { // Outer try...catch for database connection and initial checks
 await connectToDatabase();

    const novel = await Novel.findById(novelId);
 
    if (!novel) {
 return createErrorResponse("Novel not found", 404);
    }

    // Find the author associated with the novel
    const author = await Author.findById(novel.authorId);

    // Authorize user: must be the author of the novel or an admin
    if (
      session.user?.role !== 100 &&
      (!author || author.userId.toString() !== session.user?.id)
    ) {
 return createErrorResponse("Forbidden", 403);
    }

    const sessionDb = await mongoose.startSession();
 await sessionDb.startTransaction();

 const chapters = await Chapter.find({ novelId: novel._id }).session(sessionDb); // Cast session
    const reviews = await Review.find({ novelId: novel._id }).session(sessionDb); // Cast session
    const likes = await Like.find({ novelId: novel._id }).session(sessionDb);
    const readingProgress = await ReadingProgress.find({ novelId: novel._id }).session(sessionDb);
    const sliders = await Slider.find({ novelId: novel._id }).session(sessionDb); // Assuming Slider has novelId ref

    try {
      // Delete files from UploadThing
      const filesToDelete = [];
      if (novel.coverImage) {
        const coverImageKey = novel.coverImage.split("/").pop(); // Assuming the last part is the key
        if (coverImageKey) filesToDelete.push(coverImageKey);
      }
      chapters.forEach((chapter) => {
        if (chapter.content) {
          const chapterContentKey = chapter.content.split("/").pop(); // Assuming the last part is the key
          if (chapterContentKey) filesToDelete.push(chapterContentKey);
        }
      });

      // Perform file deletion on UploadThing
 if (filesToDelete.length > 0) {;
 try {
 await deleteFiles(filesToDelete);
                } catch (uploadThingError: any) {
 logger.error('Error deleting files from UploadThing during novel deletion:', uploadThingError);
                }
            }
 // Delete related documents in other collections
 await Chapter.deleteMany({ novelId: novel._id }, { session: sessionDb }); // Cast session
      await Like.deleteMany({ novelId: novel._id }, { session: sessionDb }); // Cast session
      await ReadingProgress.deleteMany({ novelId: novel._id }, { session: sessionDb }); // Cast session
      await Review.deleteMany({ novelId: novel._id }, { session: sessionDb }); // Cast session
      await Slider.deleteMany({ novelId: novel._id }, { session: sessionDb }); // Cast session // Assuming Slider uses novelId

      // Delete the Novel document
      await Novel.findByIdAndDelete(novel._id, { session: sessionDb as any }); // Cast session

      await (sessionDb as any).commitTransaction(); // Cast session
 await sessionDb.endSession();

      return createJsonResponse({ message: "Novel deleted successfully" }, 200);
    } catch (error: any) { // Specify error type
 logger.error('Delete novel error:', error); // Log the error
      await sessionDb.abortTransaction();
      sessionDb.endSession();
 throw error; // Re-throw to be caught by the outer catch block
    }
 }
}