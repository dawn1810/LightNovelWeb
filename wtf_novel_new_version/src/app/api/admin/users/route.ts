import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { createJsonResponse, createErrorResponse } from "@/lib/utils";
import { logger } from "@/lib/logger";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== 100) {
 return createErrorResponse("Forbidden", 403);
  }

  try {
    await connectToDatabase();
    const users = await User.find({}).select('-password'); // Exclude password

 return createJsonResponse(users, 200);
  } catch (error) {
    logger.error('Admin get users error:', error);
 return createErrorResponse("Internal Server Error", 500);
  }
}