import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Author from "@/models/Author";
import User from "@/models/User"; // Assuming you have a User model

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await User.findById(session.user.id);

  if (!user || (user.role !== 2 && user.role !== 100)) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }


  try {
    await connectToDatabase();

    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ message: "Author name is required" }, { status: 400 });
    }

    const existingAuthor = await Author.findOne({ userId: session.user.id });

    if (existingAuthor) {
      return NextResponse.json({ message: "Author already exists for this user" }, { status: 400 });
    }

    const newAuthor = new Author({
      userId: session.user.id,
      name,
    });

    await newAuthor.save();

    return NextResponse.json({ message: "Author created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating author:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}