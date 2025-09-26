// src/app/api/rider/get-all/route.js
import { NextResponse } from "next/server";
import { connect } from "../../../../../utils/db";
import AppError from "../../../../../lib/errors/AppError";
import { handleError } from "../../../../../lib/errors/handleError";
import { getAllRiders } from "../../../../../services/customer/customer";

export async function GET(req) {
  try {
    await connect();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    const result = await getAllRiders(page, limit);

    return NextResponse.json(
      {
        status: "success",
        message: "Riders fetched successfully",
        data: result,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching riders:", err);
    return handleError(err);
  }
}
