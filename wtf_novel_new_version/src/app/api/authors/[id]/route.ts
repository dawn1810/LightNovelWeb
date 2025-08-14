import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Author from "@/models/Author";
import { ObjectId } from "mongodb";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const authorId = params.id;
  const userId = session.user?.id;
  const userRole = session.user?.role;

  try {
    await connectToDatabase();

    // Find the author to check ownership or if admin
    const author = await Author.findById(authorId);

    if (!author) {
      return NextResponse.json({ message: "Author not found" }, { status: 404 });
    }

    // Check if the logged-in user is the author or an admin
    if (author.userId.toString() !== userId && userRole !== 100) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ message: "Author name is required" }, { status: 400 });
    }

    const updatedAuthor = await Author.findByIdAndUpdate(
      authorId,
      { name, updatedAt: new Date() },
      { new: true } // Return the updated document
    );

    if (!updatedAuthor) {
       return NextResponse.json({ message: "Author not found after update attempt" }, { status: 404 });
    }


    return NextResponse.json(updatedAuthor, { status: 200 });
  } catch (error) {
    console.error("Error updating author:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}