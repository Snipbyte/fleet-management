import bcrypt from "bcryptjs";
import User from "@models/user";
import { 
  generateToken, 
  generateForgotPasswordToken, 
  verifyForgotPasswordToken 
} from "@utils/jwt";
import AppError from "@lib/errors/AppError";
import { sendForgotPasswordEmail } from "@services/email/email";

export async function registerUser({ name, email, password, phone }) {
  // 1. Check required fields
  if (!name || !email || !password || !phone) {
    return { error: "All fields are required", status: 400 };
  }

  // 2. Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Invalid email format", status: 400 };
  }

  // 3. Validate password strength
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    return {
      error:
        "Password must be at least 8 characters long and contain at least one letter and one number",
      status: 400,
    };
  }

  // 4. Validate phone number
  const phoneRegex = /^[0-9]{8,15}$/;
  if (!phoneRegex.test(phone)) {
    return { error: "Phone number must be 8-15 digits", status: 400 };
  }

  // 5. Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { error: "User already exists", status: 400 };
  }

  // 6. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 7. Create user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
  });

  const userResponse = newUser.toObject();
  delete userResponse.password;

  return { user: userResponse, status: 201 };
}


export async function loginUser({ email, password }) {
  if (!email || !password) {
    return { error: "Email and password are required", status: 400 };
  }

  // 1️ Find user
  const user = await User.findOne({ email });
  if (!user) {
    return { error: "User not found", status: 404 };
  }

  // 2️ Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { error: "Invalid email or password", status: 401 };
  }

  // 3️ Generate token
  const token = generateToken({ id: user._id, role: user.type, email: user.email });

  // 4️ Update last login (non-blocking, we don't wait for result)
  await User.findByIdAndUpdate(user._id, { lastLogin: new Date() });

  // 5️ Prepare safe response object
  const userResponse = {
    id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.type,
  };

  return { token, user: userResponse, status: 200 };
}


export async function forgotPassword(email) {
  if (!email) {
    throw new AppError("Email is required", 400);
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  // 1️ Generate token with email inside
  const resetToken = generateForgotPasswordToken(email);

  // 2️ Send email
  await sendForgotPasswordEmail(email, resetToken);

  return {
    status: "success",
    message: "Reset password link sent to email",
  };
}


export async function resetPassword(token, newPassword) {
  if (!token) {
    throw new AppError("Authorization token missing", 401);
  }

  if (!newPassword || newPassword.length < 6) {
    throw new AppError("Password must be at least 6 characters long", 400);
  }

  // Verify token
  const decoded = verifyForgotPasswordToken(token);
  const email = decoded?.email;
  if (!email) throw new AppError("Invalid token", 401);

  // Find user
  const user = await User.findOne({ email });
  if (!user) throw new AppError("User not found", 404);

  // Hash and save new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save({ validateBeforeSave: false });

  return {
    status: "success",
    message: "Password reset successfully",
  };
}