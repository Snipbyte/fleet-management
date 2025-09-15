import jwt from "jsonwebtoken";
import AppError from "@lib/errors/AppError";

const JWT_SECRET = process.env.JWT_SECRET ; 
const FORGOT_PASSWORD_SECRET = process.env.FORGOT_PASSWORD_SECRET;

// Generate token
export const generateToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

//Forgot password token generation
export const generateForgotPasswordToken = (email) => {
  return jwt.sign(
    { email },
    process.env.FORGOT_PASSWORD_SECRET,  
    { expiresIn: "5m" }                 // reset link valid for 1minute
  );
};

//verify forgot password token
export const verifyForgotPasswordToken = (token) => {
  try {
    // verify() will throw if signature is invalid or token is expired
    const decoded = jwt.verify(token, FORGOT_PASSWORD_SECRET);

    if (!decoded?.email) {
      throw new AppError("Invalid token payload", 400);
    }

    return decoded; // contains { email, iat, exp }
  } catch (err) {
    throw new AppError("Invalid or expired reset link", 401);
  }
};

// Verify and decode token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new AppError("Invalid or expired token", 401);
  }
};

// Extract email from token
export const getEmailFromToken = (token) => {
  const decoded = verifyToken(token);
  if (!decoded.email) {
    throw new AppError("Email not found in token", 400);
  }
  return decoded.email;
};
