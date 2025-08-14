import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { createJsonResponse, createErrorResponse } from "@/lib/utils";
import { logger } from "@/lib/logger";
import { z } from "zod";
import mongoose from "mongoose"; // Import mongoose for ObjectId

// Define Zod schema for user update data
const updateUserSchema = z.object({
  role: z.number().optional(),
  // Assuming isBannedStatus is managed via role or a separate field in User model
  displayName: z.string().optional(),
  avatar: z.string().optional(),
  gender: z.string().optional(),
  // Add other updatable fields here
});

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return createErrorResponse("Unauthorized", 401);
  }

  const userId = params.id;

  // Authorize user: must be the user themselves or an admin
  if (session.user?.id !== userId && session.user?.role !== 100) {
    return createErrorResponse("Forbidden", 403);
  }

  try {
    await connectToDatabase();

    // Find the user by ID, exclude sensitive information
    const user = await User.findById(userId).select("-password -last_role");

    if (!user) {
      return createErrorResponse("User not found", 404);
    }

    return createJsonResponse(user, 200);
  } catch (error: any) {
    logger.error("Get user error:", error);
    return createErrorResponse("Internal Server Error", 500);
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return createErrorResponse("Unauthorized", 401);
  }

  const userId = params.id;

  // Authorize user: must be the user themselves or an admin
  if (session.user?.id !== userId && session.user?.role !== 100) {
    return createErrorResponse("Forbidden", 403);
  }

  try {
    await connectToDatabase();

    const body = await req.json();

    let validatedData;
    try {
      validatedData = updateUserSchema.parse(body);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return createErrorResponse("Validation Error", 400, error.errors);
      }
      throw error; // Re-throw if it's not a Zod error
    }

    // Find the user by ID and update the document
    // Use findByIdAndUpdate or findOneAndUpdate for simpler update operations
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: validatedData }, // Use $set to update specific fields
      { new: true } // Return the updated document
    ).select("-password -last_role"); // Exclude sensitive info from response

    if (!updatedUser) {
      return createErrorResponse("User not found", 404);
    }

    return createJsonResponse(updatedUser, 200, "User updated successfully");
  } catch (error: any) {
    logger.error("Update user error:", error);
    return createErrorResponse("Internal Server Error", 500);
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  // Authorize user: only admin can delete users
  if (!session || session.user?.role !== 100) {
    return createErrorResponse("Forbidden", 403);
  }

  const userId = params.id;

  try {
    await connectToDatabase();

    // Start a transaction for deleting user and related data
    const sessionDb = await mongoose.startSession();
    sessionDb.startTransaction();

    try {
      // Find the user by ID and delete the document
      const deletedUser = await User.findByIdAndDelete(userId, {
        session: sessionDb,
      });

      if (!deletedUser) {
        await sessionDb.abortTransaction();
        sessionDb.endSession();
        return createErrorResponse("User not found", 404);
      }

      // Delete related data in other collections associated with this user ID.
      // This is crucial for data integrity. Examples:
      // - Novels created by this user: await Novel.deleteMany({ authorId: deletedUser._id }, { session: sessionDb });
      // - Reviews written by this user: await Review.deleteMany({ userId: deletedUser._id }, { session: sessionDb });
      // - Likes given by this user: await Like.deleteMany({ userId: deletedUser._id }, { session: sessionDb });
      // - Reading progress of this user: await ReadingProgress.deleteMany({ userId: deletedUser._id }, { session: sessionDb });
      // Add delete operations for any other collections referencing the user ID.

      await sessionDb.commitTransaction();
      sessionDb.endSession();

      return createJsonResponse({ message: "User deleted successfully" }, 200);
    } catch (transactionError: any) {
      await sessionDb.abortTransaction();
      sessionDb.endSession();
      logger.error("Delete user transaction error:", transactionError);
      return createErrorResponse("Transaction failed", 500);
    }
  } catch (error: any) {
    logger.error("Delete user error:", error);
    return createErrorResponse("Internal Server Error", 500);
  }
}