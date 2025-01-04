import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectMongoDB();
        const user = await User.findOne({ email: credentials.email });

        if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
          throw new Error("Invalid email or password");
        }

        return { id: user._id, email: user.email, username: user.username, isAdmin: user.isAdmin };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin; // Include isAdmin in session
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin; // Include isAdmin in token
        token.username = user.username;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: { signIn: "/login" }, // Redirect to login page on failure
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
