// src/app/api/user/delete/route.js
import { NextResponse } from "next/server";
import { connect } from "../../../../../utils/db";
import AppError from "../../../../../lib/errors/AppError";
import { handleError } from "../../../../../lib/errors/handleError";
import { deleteUser } from "../../../../../services/customer/customer";

export async function DELETE(req) {
  try {
    await connect();

    const body = await req.json();
    const { userId } = body;

    if (!userId) throw new AppError("userId is required", 400);

    const result = await deleteUser(userId);

    return NextResponse.json(
      {
        status: "success",
        message: "User deleted successfully",
        data: result,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting user:", err);
    return handleError(err);
  }
}
