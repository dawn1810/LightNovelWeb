import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Novel from '@/models/Novel';
import Author from '@/models/Author'; // Assuming you have an Author model
import Genre from '@/models/Genre'; // Assuming you have a Genre model
import mongoose, { Types } from 'mongoose';
import { z } from 'zod';
import { logger } from '@/lib/logger'; // Import logger
import { createJsonResponse, createErrorResponse } from '@/lib/utils';

// Define Zod schema for search parameters
const searchParamsSchema = z.object({
 keyword: z.string().optional(),
 update_day: z.union([z.literal('2'), z.literal('3'), z.literal('4'), z.literal('5')]).optional(),
 types: z.string().optional(), // Comma-separated genre names
 num_chaps: z.union([z.literal('2'), z.literal('3'), z.literal('4')]).optional(),
 status: z.union([z.literal('2'), z.literal('3'), z.literal('4')]).optional(),
 sort_by: z.union([z.literal('1'), z.literal('2'), z.literal('3')]).optional(),
 skip: z.string().default('0').transform(val => parseInt(val, 10)),
 limit: z.string().default('10').transform(val => parseInt(val, 10)),
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    await connectToDatabase();

    const types = searchParams.get('types'); // Comma-separated genre names
    const num_chaps = searchParams.get('num_chaps');
    const status = searchParams.get('status');
    const sort_by = searchParams.get('sort_by') || 'views'; // Default sort by views
    const skip = parseInt(searchParams.get('skip') || '0', 10); // Not using transformed value yet
    const limit = parseInt(searchParams.get('limit') || '10', 10); // Not using transformed value yet

    // Validate search parameters using Zod
    const validatedParams = searchParamsSchema.safeParse(Object.fromEntries(searchParams));

    if (!validatedParams.success) {
      return createErrorResponse('Invalid search parameters', 400, validatedParams.error.errors);
    }

    let query: any = {};

    // Keyword search
    if (validatedParams.data.keyword) {
      query.$or = [
        { title: { $regex: validatedParams.data.keyword, $options: 'i' } },
        { title: { $regex: keyword, $options: 'i' } },
        { summary: { $regex: keyword, $options: 'i' } },
      ];
      // You might also want to search by author name, which would require populating
      // the author and then filtering, which is more complex in a single query.
      // For simplicity here, we'll stick to title and summary.
    }

    // Filtering by update_day
    if (validatedParams.data.update_day && validatedParams.data.update_day !== '1') { // Assuming '1' is for All Time
      const now = new Date(); // Consider using UTC dates for consistency
      let startDate: Date;
      switch (update_day) {
        case '2': // Today
          startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          break;
        case '3': // This Week (assuming week starts on Sunday)
          const dayOfWeek = now.getDay();
          startDate = new Date(now);
          startDate.setDate(now.getDate() - dayOfWeek);
          startDate.setHours(0, 0, 0, 0);
          break;
        case '4': // This Month
          startDate = new Date(now.getFullYear(), now.getMonth(), 1);
          break;
        case '5': // This Year
          startDate = new Date(now.getFullYear(), 0, 1);
          break;
        default: // All Time
          startDate = new Date(0); // Epoch time
          break;
      }
      query.updatedAt = { $gte: startDate };
    }

    // Filtering by types (genres)
    if (validatedParams.data.types && validatedParams.data.types !== '0') { // Assuming '0' means all genres
      const genreNames = validatedParams.data.types.split(',');
      // Find Genre ObjectIds based on names
      const genreObjects = await Genre.find({ name: { $in: genreNames } }, '_id');
      const genreIds = genreObjects.map(genre => genre._id);
      if (genreIds.length > 0) {
        query.genres = { $in: genreIds };
      } else {
        // If no matching genres found, return empty result
        return NextResponse.json({ novels: [], totalCount: 0 }, { status: 200 });
      }
    }

    // Filtering by num_chaps
    if (validatedParams.data.num_chaps && validatedParams.data.num_chaps !== '1') { // Assuming '1' means all chapter counts
      let minChapters = 0; // Not using validated value yet
      switch (num_chaps) {
        case '2': // > 10 chapters
          minChapters = 10;
          break;
        case '3': // > 100 chapters
          minChapters = 100;
          break;
        case '4': // > 1000 chapters
          minChapters = 1000;
          break;
        default: // All
          minChapters = 0;
          break;
      }
      if (minChapters > 0) {
        query.chapterCount = { $gte: minChapters };
      }
    }

    // Filtering by status
    if (validatedParams.data.status && validatedParams.data.status !== '1') { // Assuming '1' means all statuses
      let novelStatus = ''; // Not using validated value yet
      switch (status) {
        case '2': novelStatus = 'Đang ra'; break;
        case '3': novelStatus = 'Hoàn Thành'; break;
        case '4': novelStatus = 'Tạm dừng'; break;
        // Add other statuses if needed
      }
      if (novelStatus) {
        query.status = novelStatus;
      }
    }

    // Ensure banned novels are not included in general search
    query.isBanned = { $ne: true };


    // Sorting
    let sort: any = {};
    switch (validatedParams.data.sort_by) {
      case '1': // Views
        sort.views = -1; // Descending
        break;
      case '2': // Likes
        sort.likes = -1; // Descending
        break;
      case '3': // Updated Date
        sort.updatedAt = -1; // Descending
        break;
      default:
        sort.views = -1;
        break;
    }

    // Execute the query with pagination and sorting
 const novels = await Novel.find(query)
      .sort(sort)
      .skip(validatedParams.data.skip)
      .limit(validatedParams.data.limit)
      .populate('authorId', 'name') // Populate author name
      .populate('genres', 'name'); // Populate genre names

    // Get total count for pagination (optional but good practice)
    const totalCount = await Novel.countDocuments(query);

  } catch (error) {
    logger.error('Search novels error:', error); // Use logger
    return createErrorResponse('Internal Server Error', 500);
  }
}