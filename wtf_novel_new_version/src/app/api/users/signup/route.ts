import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { logger } from '@/lib/logger';
import { hashPassword, createJsonResponse, createErrorResponse } from '@/lib/utils';

import { z } from 'zod';

const signupSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters long.'),
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters long.'),
});

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { username, email, password } = signupSchema.parse(body);

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    
    if (existingUser) {
 return createErrorResponse('User with this username or email already exists.', 400);
    }
    
    // Hash the password (Implement this using bcrypt)
    // Assuming hashPassword is implemented and imported from '@/lib/utils'
    const hashedPassword = await hashPassword(password);

    // Create a new user document
    const newUser = new User({
      username,
      email,
      password: hashedPassword, // Use the hashed password
      role: 1, // Default role
      login_way: 'local', // Default login way
      displayName: username, // Default display name
    });

    // Save the user to the database
    await newUser.save();

 return createJsonResponse({ message: 'User created successfully.' }, 201);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
 return createErrorResponse('Validation Error', 400, error.errors);
    }
 logger.error('Signup error:', error);
 return createErrorResponse('An error occurred during signup.', 500);
  }
}