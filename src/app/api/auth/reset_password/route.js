// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";
// import { connect } from "@utils/db";
// import User from "@models/user";
// import { verifyForgotPasswordToken } from "@utils/jwt";
// import AppError from "@lib/errors/AppError";
// import { handleError } from "@lib/errors/handleError";

// export const POST = async (request) => {
//   try {
//     await connect();

//     const { newPassword } = await request.json();
//     const authHeader = request.headers.get("authorization");

//     if (!authHeader?.startsWith("Bearer ")) {
//       throw new AppError("Authorization header missing", 401);
//     }

//     if (!newPassword || newPassword.length < 6) {
//       throw new AppError("Password must be at least 6 characters long", 400);
//     }

//     const token = authHeader.split(" ")[1];
//     const decoded = verifyForgotPasswordToken(token);
//     const email = decoded?.email;

//     if (!email) throw new AppError("Invalid token", 401);

//     const user = await User.findOne({ email });
//     if (!user) throw new AppError("User not found", 404);

//     // 🔑 Hash password manually
//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     user.password = hashedPassword;
//     await user.save({ validateBeforeSave: false });

//     return NextResponse.json({
//       status: "success",
//       message: "Password reset successfully",
//     });
//   } catch (error) {
//     console.log("Error in reset_password route:", error);
//     return handleError(error);
//   }
// };
