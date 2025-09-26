import { NextResponse } from "next/server";
import { connect } from "../../../../../utils/db";
import { loginUser } from "../../../../../services/auth/auth";

export async function POST(req) {
  try {
    await connect();
    const body = await req.json();

    // Call service layer
    const result = await loginUser(body);

    if (result.error) {
      return NextResponse.json({ message: result.error }, { status: result.status });
    }

    // Build response
    const response = NextResponse.json(
      {
        message: "Login successful",
        token: result.token,
        user: result.user,
      },
      { status: result.status }
    );

    // Set cookie
    response.cookies.set("token", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 12, // 12 hours
    });

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
