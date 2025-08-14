import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Novel from "@/models/Novel";
import { createErrorResponse, createJsonResponse } from "@/lib/utils";

import { logger } from "@/lib/logger";
export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== 100) {
    return createErrorResponse("Forbidden", 403);
  }

  try {
    await connectToDatabase();
    const novels = await Novel.find({});

    return createJsonResponse(novels, 200);
  } catch (error: any) {
    logger.error('Admin get novels error:', error);
 return createErrorResponse("Internal Server Error", 500, error.message);
  }
}