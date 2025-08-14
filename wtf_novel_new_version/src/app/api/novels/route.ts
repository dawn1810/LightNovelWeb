import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Novel from "@/models/Novel";
import Author from "@/models/Author";
import Chapter from "@/models/Chapter";
import Genre from "@/models/Genre";
import User from "@/models/User";
import mongoose from "mongoose";
import { createJsonResponse, createErrorResponse } from "@/lib/utils";
import { z } from 'zod';
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { UploadThingError, UTApi, deleteFiles } from "uploadthing/server"; // Import deleteFiles
import { handleUpload } from "uploadthing/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  // 1. Get the user session and authorize the user
  if (!session || (session.user?.role !== 2 && session.user?.role !== 100)) {
    return createErrorResponse("Unauthorized", 401);
  }

  const ChapterSchema = z.object({
    title: z.string().min(1, "Chapter title is required"),
    // content is handled via file upload, so we don't validate it directly here
  });

  const NovelUploadSchema = z.object({
    title: z.string().min(1, "Title is required"),
    summary: z.string().min(1, "Summary is required"),
    status: z.string().min(1, "Status is required"),
    genres: z.array(z.string()).min(1, "At least one genre is required"),
    chapters: z.array(ChapterSchema).min(1, "At least one chapter is required"),
  });

  // 2. Connect to the MongoDB database.
  try {
    await connectToDatabase();

    // Use UploadThing's handleUpload to process the request
    const uploadResult = await handleUpload({
      config: ourFileRouter,
      req,
    });

    if (!uploadResult || uploadResult.length === 0) {
        return createErrorResponse("File upload failed", 400);
    }

    // Extract file URLs and other form data
    const fileUrls: { [key: string]: string } = {};
    const formData: { [key: string]: any } = {};

    uploadResult.forEach(item => {
        if ('url' in item && 'key' in item) {
            fileUrls[item.key] = item.url;
        } else if ('name' in item) {
             formData[item.name] = item.value;
        }
     });

    const chapterDataString = formData.chapters as string | undefined;
    const chaptersData = chapterDataString ? JSON.parse(chapterDataString) : undefined;

    const validationResult = NovelUploadSchema.safeParse({
        title: formData.title,
        summary: formData.summary,
        status: formData.status,
        genres: formData.genres ? JSON.parse(formData.genres as string) : [], // Assuming genres are sent as JSON string array
        chapters: chaptersData,
    });

    const sessionDB = await mongoose.startSession();
    const utapi = new UTApi();
    const uploadedFileKeys: string[] = []; // Track uploaded file keys for cleanup
    sessionDB.startTransaction();

    try {
      // 5. Find the author's ObjectId based on the user ID from the session
      let author = await Author.findOne({ userId: session.user.id }).session(sessionDB);

      // Create a new author if necessary (simplified logic, refine as needed)
      if (!author) {
          const userData = await User.findById(session.user.id).session(sessionDB);
          if (!userData) {
              throw new Error("User not found"); // Should not happen if session exists
           }
          author = await Author.create([{ userId: session.user.id, name: userData.displayName || 'Unknown Author' }], { session: sessionDB, new: true });
          author = author[0]; // create returns an array;
       }

      // Add uploaded file keys to the list for potential cleanup
      uploadResult.forEach(item => {
        if ('key' in item) {
          uploadedFileKeys.push(item.key);
        }
      });

      const coverImage = fileUrls['coverImage']; // Get cover image URL from uploaded files

      if (!validationResult.success) {
          return NextResponse.json({ message: "Validation failed", errors: validationResult.error.errors }, { status: 400 });
      }

      const { title, summary, status, genres, chapters } = validationResult.data;
       if (!coverImage) {
           return createErrorResponse("Cover image file is required", 400);
       }

      // 7. Create a new Novel document
      const genreObjects = await Genre.find({ name: { $in: genres } }).session(sessionDB);
      const genreIds = genreObjects.map(genre => genre._id);

      const newNovel = new Novel({ // Use the correct key for cover image URL
        authorId: author._id,
        title,
        summary,
        status,
 genres: genreIds, // Make sure genreIds is an array of ObjectIds
        coverImage: coverImage, // Use the uploaded URL here
        chapterCount: 0, // Will update later
        views: 0,
        likes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        isBanned: false,
      });

      // 8. Save the new Novel document.
      await newNovel.save({ session: sessionDB });

      // 9. Iterate through the chapters data:
       let chapterOrder = 1;
       const chapterDocuments = [];
      for (const chapterData of chaptersData) {
          const chapterContentUrl = fileUrls[`chapterContent_${chapterOrder}`]; // Get chapter content URL based on a naming convention

           // Ensure content URL exists for the chapter
           if (!chapterContentUrl) {
               throw new Error(`Content file missing for chapter ${chapterOrder}`);
            }

           const newChapter = new Chapter({
          novelId: newNovel._id,
          title: chapterData.title,
          content: chapterContentUrl, // Use the uploaded URL here;
          order: chapterOrder,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
           chapterDocuments.push(newChapter);
      }

       if (chapterDocuments.length > 0) {
           await Chapter.insertMany(chapterDocuments, { session: sessionDB });
       }

        // Note: Update chapterCount only if chapters were successfully saved

      // 10. Update the `chapterCount` in the Novel document
      newNovel.chapterCount = chapters.length;
      await newNovel.save({ session: sessionDB });

      await sessionDB.commitTransaction();
      sessionDB.endSession();

      // 11. Return a success response with the new novel's ID and status 201.
      return createJsonResponse({ message: "Novel uploaded successfully", novelId: newNovel._id }, 201);

    } catch (transactionError) {
      await sessionDB.abortTransaction();
      sessionDB.endSession();
      // Attempt to delete uploaded files from UploadThing in case of transaction failure
      if (uploadedFileKeys.length > 0) {
        try {
 await deleteFiles(uploadedFileKeys); // Use deleteFiles function
          logger.warn(`Deleted uploaded files after transaction failure: ${uploadedFileKeys.join(', ')}`);
        } catch (deleteError) {
          logger.error("Error deleting files from UploadThing after transaction failure:", deleteError);
        }
      }
      logger.error("Upload novel transaction error:", transactionError);
      // Consider deleting uploaded files from UploadThing in case of transaction failure
      return createErrorResponse("Failed to upload novel during transaction", 500);
    }

  } catch (error) {
    logger.error("Error uploading novel:", error); // Use logger
    return createErrorResponse("Internal Server Error", 500);
  }
}