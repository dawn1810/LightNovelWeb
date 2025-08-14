import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { logger } from "@/lib/logger";
import { createJsonResponse, createErrorResponse } from "@/lib/utils";
// Import other models if needed for related data deletion
import { z } from 'zod';
// import Novel from "@/models/Novel";
// import Like from "@/models/Like";
// import Review from "@/models/Review";
// import ReadingProgress from "@/models/ReadingProgress";
// import Author from "@/models/Author";


const userUpdateSchema = z.object({
  role: z.number().optional(),
  isBanned: z.boolean().optional(),
});

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

 if (!session || session.user?.role !== 100) { return createErrorResponse("Forbidden", 403); }

  const userId = params.id;
  
  let updateData;
  try {
    const body = await req.json();
    updateData = userUpdateSchema.parse(body);
  } catch (error) {
 if (error instanceof z.ZodError) { return createErrorResponse("Invalid input data", 400, error.errors); }
 return createErrorResponse("Error parsing request body", 400);
  }

 console.log("Update data:", updateData); // Log update data for debugging

  try {
    await connectToDatabase();
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

 return createJsonResponse({ message: "User updated successfully" }, 200);
  } catch (error) {
 logger.error('Admin update user error:', error);
 return createErrorResponse("Internal Server Error", 500);
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

 if (!session || session.user?.role !== 100) { return createErrorResponse("Forbidden", 403); }

  const userId = params.id;

  try {
    await connectToDatabase();

    // Start a transaction if using replica set
    // const session = await mongoose.startSession();
    // session.startTransaction();
    const user = await User.findByIdAndDelete(userId);

    // TODO: Delete related data in other collections associated with this user ID
    // Example: Delete all novels by this author if the user is an author
    // await Novel.deleteMany({ authorId: user._id }, { session });
    // Example: Delete all likes by this user
    // await Like.deleteMany({ userId: user._id }, { session });
    // Example: Delete all reviews by this user
    // await Review.deleteMany({ userId: user._id }, { session });
    // Example: Delete all reading progress entries by this user
    // await ReadingProgress.deleteMany({ userId: user._id }, { session });
    // Example: Delete the author document if the user is an author
    // await Author.deleteOne({ userId: user._id }, { session });

    // await session.commitTransaction();
    // session.endSession();

 if (!user) { return createErrorResponse("User not found", 404); }

 return createJsonResponse({ message: "User deleted successfully" }, 200);
  } catch (error) {
    console.error("Error deleting user:", error);
 logger.error('Admin delete user error:', error);
 return createErrorResponse("Internal Server Error", 500);
  }
}