import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Novel from "@/models/Novel";
import Chapter from "@/models/Chapter";
import Like from "@/models/Like"; // Assuming you have a Like model
import ReadingProgress from "@/models/ReadingProgress"; // Assuming you have a ReadingProgress model
import Review from "@/models/Review"; // Assuming you have a Review model
import { z, ZodError } from "zod";
import Slider from "@/models/Slider"; // Assuming you have a Slider model
import { logger } from "@/lib/logger";
import { createJsonResponse, createErrorResponse } from "@/lib/utils";
import mongoose from "mongoose";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== 100) { // Assuming 100 is the admin role
 return createErrorResponse("Forbidden", 403);
  }

  const novelId = params.id;

  const updateNovelSchema = z.object({
    isBanned: z.boolean().optional(),
    // Add other fields if admin can update them
  });

  try {
    const updateData = updateNovelSchema.parse(await req.json()); // Zod validation

    if (!mongoose.Types.ObjectId.isValid(novelId)) {
      return createErrorResponse("Invalid Novel ID", 400);
    }

  try {
    await connectToDatabase(); // Ensure database connection is established here

    const updatedNovel = await Novel.findByIdAndUpdate(novelId, updateData, {
      new: true,
 });

    if (!updatedNovel) {
      return createErrorResponse("Novel not found", 404);
    }
 return createJsonResponse(updatedNovel, 200);
  } catch (error: any) {
    console.error("Error updating novel:", error);
 return createErrorResponse("Internal Server Error", 500);
  }
 } catch (error: any) {
    if (error instanceof ZodError) { // Handle Zod validation errors
 return createErrorResponse("Invalid input data", 400, error.errors);
    }
    logger.error('Admin update novel error:', error);
 return createErrorResponse("Internal Server Error", 500); // Catch other errors
  }
}
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== 100) {
 return createErrorResponse("Forbidden", 403);
  }

  const novelId = params.id;

  if (!mongoose.Types.ObjectId.isValid(novelId)) {
 return createErrorResponse("Invalid Novel ID", 400);
  }

  try {
    await connectToDatabase();

    const novel = await Novel.findById(novelId);

    if (!novel) {
 return createErrorResponse("Novel not found", 404);
    }

    // Start a transaction for data consistency
    const sessionDb = await mongoose.startSession();
    sessionDb.startTransaction();

    try {
      // Delete related documents in other collections
      await Chapter.deleteMany({ novelId: novelId }, { session: sessionDb });
      // await Like.deleteMany({ novelId: novelId }, { session: sessionDb }); // Uncomment and implement if you have a Like model
      // await ReadingProgress.deleteMany({ novelId: novelId }, { session: sessionDb }); // Uncomment and implement if you have a ReadingProgress model
      // await Review.deleteMany({ novelId: novelId }, { session: sessionDb }); // Uncomment and implement if you have a Review model
      // await Slider.deleteMany({ novelId: novelId }, { session: sessionDb }); // Uncomment and implement if you have a Slider model


      // Delete the Novel document
      await Novel.findByIdAndDelete(novelId, { session: sessionDb });

      // TODO: Delete related files from Google Drive (chapter content, cover image)

      await sessionDb.commitTransaction();
      sessionDb.endSession();

 return createJsonResponse({ message: "Novel deleted successfully" }, 200);
    } catch (transactionError) {
      await sessionDb.abortTransaction();
      sessionDb.endSession();
 logger.error("Transaction error deleting novel:", transactionError);
 return createErrorResponse("Error deleting novel", 500);
    }
  } catch (error) {
    console.error("Error deleting novel:", error);
 return createErrorResponse("Internal Server Error", 500);
  }
}