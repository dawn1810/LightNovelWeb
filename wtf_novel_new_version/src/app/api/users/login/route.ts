import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb'; // Assuming you have this function
import User from '@/models/User'; // Assuming you have this model
import { comparePassword, createJsonResponse, createErrorResponse } from '@/lib/utils'; // You will create this function
import { z } from 'zod';
import { logger } from '@/lib/logger';

const loginSchema = z.object({
  usernameOrEmail: z.string().min(1, 'Username or Email is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginInput = z.infer<typeof loginSchema>;

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const body = await req.json();

    let validatedData: LoginInput;
    try {
      validatedData = loginSchema.parse(body);
    } catch (error) {
      return NextResponse.json({ message: error.errors }, { status: 400 });
    }

    const { usernameOrEmail, password } = validatedData;

    // Find the user by username or email
    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!user) {
      return createErrorResponse('Invalid credentials', 401);
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return createErrorResponse('Invalid credentials', 401);
    }

    // Passwords match, create session or token (integrate NextAuth.js here later)
    // For now, you might return a success message

    return createJsonResponse({ message: 'Login successful' }, 200);

  } catch (error) {
    logger.error('Login error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}