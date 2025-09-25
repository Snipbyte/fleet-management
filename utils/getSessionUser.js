import { getServerSession } from "next-auth/next";
import { authConfig } from "@/auth";
import jwt from "jsonwebtoken";

export const getSessionUser = async (request) => {
  console.log("getSessionUser called");
  let user = null;
  try {
    const authHeader = request?.headers?.get("authorization");
    console.log("Authorization Header:", authHeader);
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      console.log("The token from header:", token);
      const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);
      console.log("The is decoded token:");
      
      console.log("Decoded JWT:", decoded); 
      user = {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
        role: decoded.type,
      };
      console.log("User from JWT:", user);
      return user;
    }
  } catch (err) {
    console.warn("JWT verification failed:", err.message);
  }

  try {
    const session = await getServerSession(authConfig);
    if (session?.user) {
      user = {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        picture: session.user.picture,
        role: session.user.role,
        sessionToken: session.user.sessionToken,
      };
    }
  } catch (err) {
    console.warn("getServerSession failed:", err.message);
  }
  console.log("Session User:", user);
  return user;
};


export const getBusinessUser = async (request) => {
  console.log("getSessionUser called");
  let user = null;
  try {
    const authHeader = request?.headers?.get("authorization");
    console.log("Authorization Header:", authHeader);
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      console.log("The token from header:", token);
      const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);
      console.log("The is decoded token:");
      
      console.log("Decoded JWT:", decoded); 
      user = {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role,
      };
      console.log("User from JWT:", user);
      return user;
    }
  } catch (err) {
    console.warn("JWT verification failed:", err.message);
  }

  try {
    const session = await getServerSession(authConfig);
    if (session?.user) {
      user = {
        id: session.user.id,
        email: session.user.email,
      //  name: session.user.name,
      //  picture: session.user.picture,
        role: session.user.role,
        sessionToken: session.user.sessionToken,
      };
    }
  } catch (err) {
    console.warn("getServerSession failed:", err.message);
  }
  console.log("Session User:", user);
  return user;
};
