import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Slider from "@/models/Slider";
import Novel from "@/models/Novel"; // Assuming you have a Novel model
import { ourFileRouter } from "@/app/api/uploadthing/route";
import { logger } from "@/lib/logger";
import { createErrorResponse, createJsonResponse } from "@/lib/utils";
import { UTApi } from "uploadthing/server";
import { handleUpload } from "uploadthing/server";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== 100) {
    return createErrorResponse("Unauthorized", 403);
  }

  try {
 await connectToDatabase();
    const sliders = await Slider.find({}).populate('novelId'); // Populate novel details
 return createJsonResponse(sliders, 200);
  } catch (error: any) {
    logger.error('Admin get slider error:', error);
 return createErrorResponse("Error fetching slider items", 500, error.message);
  }
}

export async function PUT(req: Request) {
  const utapi = new UTApi();
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== 100) {
    return createErrorResponse("Unauthorized", 403);
  }

  const updatedSliderData = await req.json(); // Assuming an array of slider items

  try {
    await connectToDatabase();

    // Start a transaction
    const sessionDB = await Slider.startSession();
    sessionDB.startTransaction();

    try {
      const existingSliders = await Slider.find({});
      const existingSliderIds = existingSliders.map(item => item._id.toString());
      const updatedSliderIds = updatedSliderData.map((item: any) => item._id).filter((id: any) => id);

      // Delete removed slider items
      const removedSliderIds = existingSliderIds.filter(id => !updatedSliderIds.includes(id));
      if (removedSliderIds.length > 0) {
        const removedSliders = existingSliders.filter(item => removedSliderIds.includes(item._id.toString()));
        const fileKeysToDelete = removedSliders.map(item => {
          const urlParts = item.image.split('/'); // Assuming the last part is the key
          return urlParts[urlParts.length - 1];
        }).filter(key => key); // Filter out any empty keys
          await Slider.deleteMany({ _id: { $in: removedSliderIds } }, { session: sessionDB });
          if (fileKeysToDelete.length > 0) {
              await utapi.deleteFiles(fileKeysToDelete);
          }
      }


      for (const item of updatedSliderData) {
        let imageUrl = item.image;

 // Check if a new image file is provided
 if (item.imageFile) { // Assuming item.imageFile is the actual file data or a representation
 const uploadResult = await handleUpload({ config: ourFileRouter, req: req });
 // Find the upload result for this specific file
          const uploadedFile = uploadResult.find(file => file.name === item.imageFile.name); // Adjust based on how you identify files
          if (uploadedFile) {
                // If updating an existing item with a new image, delete the old image
            if (item._id) {
              const oldSlider = existingSliders.find(slider => slider._id.toString() === item._id);
              if (oldSlider && oldSlider.image) {
                         const urlParts = oldSlider.image.split('/');
 const oldFileKey = urlParts[urlParts.length - 1];
                         await utapi.deleteFiles(oldFileKey);
                    }
                }
                imageUrl = uploadedFile.url;
            } else {
              throw new Error("Failed to upload slider image");
            }
        }

 if (item._id) {
          // Update existing slider item
          await Slider.findByIdAndUpdate(item._id, {
            novelId: item.novelId,
            image: imageUrl,
          }, { session: sessionDB });
        } else {
          // Create new slider item
          const newSlider = new Slider({
            novelId: item.novelId,
            image: imageUrl,
          });
          await newSlider.save({ session: sessionDB }); // Corrected save call
        }
 }

      await sessionDB.commitTransaction();
      return createJsonResponse({ message: "Slider updated successfully" }, 200);

    } catch (error: any) {
 await sessionDB.abortTransaction(); // Ensure transaction is aborted
      return createErrorResponse("Failed to update slider during transaction", 500, error.message);
    }

  } catch (error) {
    console.error("Error connecting to database or starting session:", error);
    return NextResponse.json(
      { message: "Internal Server Error" }, { status: 500 }
    );
  }
}