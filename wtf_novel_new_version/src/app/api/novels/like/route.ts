import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Like from "@/models/Like";
import Novel from "@/models/Novel";
import mongoose from "mongoose";
import { createJsonResponse, createErrorResponse } from "@/lib/utils";
import { logger } from "@/lib/logger";
import { z } from "zod";

const likeSchema = z.object({
 novelId: z.string(),
 liked: z.boolean(),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  try {
    await connectToDatabase();

    const sessionMongo = await mongoose.startSession();
    sessionMongo.startTransaction();

    try {
 if (!session || !session.user) {
 await sessionMongo.abortTransaction();
 sessionMongo.endSession();
 return createErrorResponse("Unauthorized", 401);
      }

      const requestBody = await req.json();
      const { novelId: validatedNovelId, liked } = likeSchema.parse(requestBody);
      const novelObjectId = new mongoose.Types.ObjectId(validatedNovelId);
      const userObjectId = new mongoose.Types.ObjectId(session.user.id);
      const existingLike = await Like.findOne({
        novelId: novelObjectId,
      });

      let novel = await Novel.findById(novelObjectId).session(sessionMongo);

      if (!novel) {
        await sessionMongo.abortTransaction();
        sessionMongo.endSession();
 return createErrorResponse("Novel not found", 404);
      }

      if (liked) {
        if (!existingLike) {
          await Like.create(
            [
              {
                userId: userObjectId,
                novelId: novelObjectId,
              },
            ],
            { session: sessionMongo }
          );
          novel.likes = (novel.likes || 0) + 1;
          await novel.save({ session: sessionMongo });
        }
      } else {
        if (existingLike) {
          await Like.deleteOne({ _id: existingLike._id }, { session: sessionMongo });
          if (novel.likes > 0) {
            novel.likes = novel.likes - 1;
            await novel.save({ session: sessionMongo });
          }
        }
      }

      await sessionMongo.commitTransaction();
      sessionMongo.endSession();
      return createJsonResponse({ message: "Success" }, 200);
    } catch (transactionError) {
      await sessionMongo.abortTransaction();
      sessionMongo.endSession();
      console.error("Transaction Error:", transactionError);
 return createErrorResponse("Transaction failed", 500, transactionError);
    }
  } catch (error) {
    console.error("Error processing like/unlike:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error },
      { status: 500 }
    );
  }
}