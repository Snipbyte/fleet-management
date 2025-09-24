import { NextResponse } from "next/server";
import { connect } from "../../../../utils/services";
import { forgotPassword } from "../../../../../services/auth/auth";
import { handleError } from "../../../../../lib/errors/handleError";

export const POST = async (request) => {
  try {
    await connect();
    const { email } = await request.json();

    // Call service layer
    const result = await forgotPassword(email);

    return NextResponse.json(result);
  } catch (error) {
    return handleError(error);
  }
};
