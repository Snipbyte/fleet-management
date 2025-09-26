import { NextResponse } from "next/server";
import { connect } from "../../../../../utils/db";
import { uploadImageToFirebase } from "../../../../../utils/uploadFileToFirebase";
import AppError from "../../../../../lib/errors/AppError";
import { handleError } from "../../../../../lib/errors/handleError";
import { createDriver } from "../../../../../services/driver/driver";

export async function POST(req) {
  try {
    await connect();

    const formData = await req.formData();

    let profilePictureUrl = null;

    // Handle profile picture
    const profileFile = formData.get("profilePicture");
    if (profileFile && profileFile instanceof Blob && profileFile.size > 0) {
      const arrayBuffer = await profileFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filename = profileFile.name || "profile-picture.png";
      profilePictureUrl = await uploadImageToFirebase(
        "drivers/profilePictures",
        buffer,
        filename
      );
    }

    // Extract other fields (name, email, phone, password, license, etc.)
    const data = {};
    for (const [key, value] of formData.entries()) {
      if (key !== "profilePicture") data[key] = value;
    }

    // Add profile picture URL if uploaded
    if (profilePictureUrl) data.profilePicture = profilePictureUrl;

    // Force user type = driver
    data.type = "driver";

    // Call service
    const driver = await createDriver(data);

    return NextResponse.json(
      {
        status: "success",
        message: "Driver created successfully",
        data: driver,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating driver:", err);
    return handleError(err);
  }
}
