import Genre from '@/models/Genre';
import { connectToDatabase } from "@/lib/mongodb";
import Novel from "@/models/Novel"; // Assuming you have a Novel model
import { createJsonResponse, createErrorResponse } from "@/lib/utils";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { logger } from "@/lib/logger";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  // Authorize user as admin
  if (!session || session.user?.role !== 100) {
 return createErrorResponse("Forbidden", 403);;
  }

  try {
    await connectToDatabase();

    const genreId = params.id;

    // Find and delete the genre
    const deletedGenre = await Genre.findByIdAndDelete(genreId);

    if (!deletedGenre) {
 return createErrorResponse("Genre not found", 404);
    }

    // Remove this genre from the genres array of any novels that include it.
    // Consider handling potential errors or large number of novels efficiently.
    await Novel.updateMany(
      { genres: genreId },
      { $pull: { genres: genreId } }
    );


 return createJsonResponse({ message: "Genre deleted successfully" }, 200);; // Assuming success message
  } catch (error) {
 // Log the error for server-side debugging
    logger.error('Admin delete genre error:', error);
 return createErrorResponse("Internal Server Error", 500);; // Assuming a generic error response
  }
}