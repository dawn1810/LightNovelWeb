import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Genre from "@/models/Genre";
import { z } from 'zod';
import { logger } from "@/lib/logger";
import { createJsonResponse, createErrorResponse } from "@/lib/utils";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== 100) {
 return createErrorResponse("Forbidden", { status: 403 });
  }
  try {
    await connectToDatabase();
    const genres = await Genre.find({}).lean(); // Use .lean() for better performance if not modifying documents
 return createJsonResponse(genres, 200);;
  } catch (error) {
 logger.error("Error fetching genres:", error);
 return createErrorResponse("Internal Server Error", { status: 500 });
  }
}

const createGenreSchema = z.object({
  name: z.string().min(1, "Genre name is required"),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== 100) {
 return createErrorResponse("Forbidden", { status: 403 });
  }

  try {
    await connectToDatabase();

    const body = await req.json();
    const validation = createGenreSchema.safeParse(body);

    if (!validation.success) {
 return createErrorResponse("Validation Error", { status: 400, error: validation.error.errors });
    }

 const { name } = validation.data;
    const existingGenre = await Genre.findOne({ name }).lean();
    if (existingGenre) {
 return createErrorResponse("Genre already exists", { status: 400 });
    }
    const newGenre = new Genre({ name: validation.data.name });
    await newGenre.save();

 return createJsonResponse({ id: newGenre._id, name: newGenre.name }, 201);
  } catch (error) {
    logger.error('Admin create genre error:', error);
 return createErrorResponse("Internal Server Error", { status: 500 });
  }
}