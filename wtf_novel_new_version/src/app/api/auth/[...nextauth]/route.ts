import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { comparePassword } from "@/lib/utils"; // Adjust the import path as needed
import clientPromise, { connectToDatabase } from "@/lib/mongodb"; // Adjust the import path as needed
import User from "@/models/User"; // Adjust the import path as needed
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { logger } from "@/lib/logger";


export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        usernameOrEmail: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectToDatabase();

        try {
          const user = await User.findOne({
            $or: [
              { username: credentials?.usernameOrEmail },
              { email: credentials?.usernameOrEmail },
            ],
          });

          if (!user) {
            return null; // User not found
          }

          const isPasswordValid = await comparePassword(
            credentials?.password || "",
            user.password
          );

          if (!isPasswordValid) {
            return null; // Passwords do not match
          }

          // Return user object if authentication is successful
          // NextAuth will create a JWT from this object
          return {
            id: user._id.toString(), // Must be a string
            name: user.displayName || user.username,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            // Add other user properties you want in the JWT
          };
        } catch (error) {
          logger.error("Authorization error:", error);
          return null; // Handle errors appropriately
        }
      },
    }),
    // Add other providers here (e.g., GoogleProvider)
  ],
  // Add a secret for signing the JWT
  // Generate a strong secret in production
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  // Add pages for custom login/error pages if needed
  // pages: {
  //   signIn: '/auth/signin',
  //   error: '/auth/error',
  // }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };