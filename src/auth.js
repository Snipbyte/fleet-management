// src/auth.js
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { connect } from "@utils/db";
import User from "@models/user";

export const authConfig = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, 
    updateAge: 24 * 60 * 60, 
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        await connect();

        const { email, password } = credentials;
        console.log("Attempting login for:", email,password);

        const user = await User.findOne({ email });
        console.log("this is user",user)

        if (!user) {
          throw new Error("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error("Email or password is incorrect");
        }

        const sessionToken = crypto.randomUUID();

        await User.findByIdAndUpdate(user._id);

        return {
          ...user.toObject(),
          sessionToken,
          role: user.type,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.email = user.email;
        token.name = user.name || user.businessName;
        token.picture = user.profilePicture || user.businessLogo;
        token.sessionToken = user.sessionToken;
        token.role = user.type;
      }
      return token;
    },
 async session({ session, token }) {
  if (token) {
    session.user.id = token.id;
    session.user.email = token.email;
    session.user.name = token.name;
    session.user.picture = token.picture;
    session.user.role = token.role; 
  }
  return session;
}
  },

};
