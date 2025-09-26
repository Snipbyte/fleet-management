import { NextResponse } from "next/server";
import { connect } from "../../../../../utils/db";
import { registerUser } from "../../../../../services/auth/auth";

export async function POST(req) {
  try {
    await connect();
    const body = await req.json();

    // Call service layer
    const result = await registerUser(body);

    if (result.error) {
      return NextResponse.json({ message: result.error }, { status: result.status });
    }

    return NextResponse.json(
      { message: "User created successfully", user: result.user },
      { status: result.status }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
