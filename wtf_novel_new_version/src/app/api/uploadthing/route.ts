import { createUploadthing, type OurFileRouter } from "uploadthing/server";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  novelImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ file }) => {
      console.log("Novel image uploaded:", file.url, file.key);
      return { url: file.url, key: file.key };
    }),

  chapterContent: f({ text: { maxFileSize: "16MB" } })
    .onUploadComplete(async ({ file }) => {
      console.log("Chapter content uploaded:", file.url, file.key);
      return { url: file.url, key: file.key };
    }),
} satisfies OurFileRouter;

export type OurFileRouter = typeof ourFileRouter;

export const { GET, POST } = createNextRoute(ourFileRouter);

import { createNextRoute } from "uploadthing/next";