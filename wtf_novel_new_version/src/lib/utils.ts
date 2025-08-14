import bcrypt from 'bcryptjs';
import { UTApi } from "uploadthing/server";
import { NextResponse } from 'next/server';

import { logger } from "@/lib/logger";
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

const utapi = new UTApi();

export const deleteFileFromUploadThing = async (fileUrl: string): Promise<void> => {
  try {
    // Extract the file key from the URL
    const urlParts = fileUrl.split('/');
    const fileKey = urlParts[urlParts.length - 1];

    await utapi.deleteFiles(fileKey);
  } catch (error) {
    logger.error("Error deleting file from UploadThing:", error);
    // Handle the error appropriately, e.g., log it or throw a custom error
  }
};

export const createJsonResponse = (data: any, status: number = 200, message?: string): NextResponse => {
  return NextResponse.json({
    success: true,
    message: message,
    data: data,
  }, { status });
};

export const createErrorResponse = (message: string, status: number = 500, details?: any): NextResponse => {
  return NextResponse.json({
    success: false,
    message: message,
    error: details,
  }, { status });
};

