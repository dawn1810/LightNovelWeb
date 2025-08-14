import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Review from "@/models/Review";
import mongoose from "mongoose"; // Ensure mongoose is imported for ObjectId validation
import { createJsonResponse, createErrorResponse } from "@/lib/utils";
import { logger } from "@/lib/logger";
import { z } from "zod";

const reviewSchema = z.object({
  novelId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid novel ID format",
  }),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(1, "Comment cannot be empty"),
});

export async function POST(req: Request) {
  try {
    const { novelId, rating, comment } = await req.json();

    // 1. Get the user session and ensure the user is authenticated. If not, return 401.
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return createErrorResponse("Unauthorized", 401);
    }

    // 2. Validate input data using Zod
    const validatedData = reviewSchema.parse({ novelId, rating, comment });

    await connectToDatabase(); // Ensure database connection

    // 6. Create a new Review document
    const newReview = new Review({
      novelId: new mongoose.Types.ObjectId(validatedData.novelId),
      userId: new mongoose.Types.ObjectId(session.user.id), // Assuming session.user.id is the user's MongoDB ObjectId
      rating,
      comment,
    });

    await newReview.save();

    // 3. Use createJsonResponse for successful review submission (status 201).
    return createJsonResponse(
      { message: "Review submitted successfully", reviewId: newReview._id },
      201
    );
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return createErrorResponse("Validation Error", 400, error.errors);
    }
    logger.error('Submit review error:', error);
    return createErrorResponse("Internal Server Error", 500); // 4. Use createErrorResponse for unexpected server errors (status 500).
  }
}