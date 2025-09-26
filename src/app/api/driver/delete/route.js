import { NextResponse } from "next/server";
import { connect } from "../../../../../utils/db";
import AppError from "../../../../../lib/errors/AppError";
import { handleError } from "../../../../../lib/errors/handleError";
import { deleteDriver } from "../../../../../services/driver/driver";

export async function DELETE(req) {
  try {
    await connect();

    const body = await req.json();
    const { userId } = body;

    if (!userId) throw new AppError("userId is required", 400);

    await deleteDriver(userId);

    return NextResponse.json(
      {
        status: "success",
        message: "Driver deleted successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting driver:", err);
    return handleError(err);
  }
}
