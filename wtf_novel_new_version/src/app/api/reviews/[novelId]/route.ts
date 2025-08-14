import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Review from "@/models/Review";
import { createJsonResponse, createErrorResponse } from "@/lib/utils";
import User from "@/models/User";
import { logger } from "@/lib/logger";

export async function GET(
  req: Request,
  { params }: { params: { novelId: string } }
) {
  const { novelId } = params;

  try {
    await connectToDatabase();

    const reviews = await Review.find({ novelId: novelId })
      .populate("userId", "displayName avatar") // Populate user info, only select displayName and avatar
      .sort({ createdAt: -1 }); // Sort by newest first

 return createJsonResponse(reviews, 200);
  } catch (error) {
    logger.error("Get reviews error:", error);
 return createErrorResponse("Internal Server Error", 500);
  }
}