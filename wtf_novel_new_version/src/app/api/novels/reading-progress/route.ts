import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import ReadingProgress from "@/models/ReadingProgress";
import mongoose from "mongoose";
import { createJsonResponse, createErrorResponse } from "@/lib/utils"; // Assuming utils path
import { logger } from "@/lib/logger";
import { z } from 'zod';

const readingProgressSchema = z.object({
 novelId: z.string().min(1, "Novel ID is required"),
 currentChapterId: z.string().min(1, "Current chapter ID is required"),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
 return createErrorResponse("Unauthorized", 401);
  }

  try {
    await connectToDatabase();

    const { novelId, currentChapterId } = await req.json();
    const validatedData = readingProgressSchema.parse({ novelId, currentChapterId });

    const userId = new mongoose.Types.ObjectId(session.user.id);
    const novelObjectId = new mongoose.Types.ObjectId(validatedData.novelId);
    const chapterObjectId = new mongoose.Types.ObjectId(validatedData.currentChapterId);

    const existingProgress = await ReadingProgress.findOne({
      userId: userId,
      novelId: novelObjectId,
    });

 if (existingProgress) {
 existingProgress.currentChapterId = chapterObjectId;
 await existingProgress.save();
 } else {
 const newProgress = new ReadingProgress({
        userId: userId,
        novelId: novelObjectId,
        currentChapterId: chapterObjectId,
      });
      await newProgress.save();
    }

 return createJsonResponse({ message: "Reading progress updated" }, 200);
  } catch (error) {
 if (error instanceof z.ZodError) {
 return createErrorResponse("Validation Error", 400, error.errors);
    }
 logger.error('Update reading progress error:', error);
 return createErrorResponse("Internal Server Error", 500);
  }
}