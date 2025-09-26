import { NextResponse } from "next/server";
import { connect } from "../../../../../utils/db";
import { getAllDrivers } from "../../../../../services/driver/driver";
import { handleError } from "../../../../../lib/errors/handleError";

export async function GET(req) {
  try {
    await connect();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    const result = await getAllDrivers(page, limit);

    return NextResponse.json(
      {
        status: "success",
        message: "Drivers fetched successfully",
        data: result.drivers,
        pagination: result.pagination,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching drivers:", err);
    return handleError(err);
  }
}
