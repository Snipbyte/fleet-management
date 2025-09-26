// src/app/api/rider/create/route.js
import { NextResponse } from "next/server";
import { connect } from "../../../../../utils/db";
import { uploadImageToFirebase } from "../../../../../utils/uploadFileToFirebase";
import AppError from "../../../../../lib/errors/AppError";
import { handleError } from "../../../../../lib/errors/handleError";
import { createRider } from "../../../../../services/customer/customer";

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
        "riders/profilePictures",
        buffer,
        filename
      );
    }

    // Extract other fields (name, email, phone, password, etc.)
    const data = {};
    for (const [key, value] of formData.entries()) {
      if (key !== "profilePicture") data[key] = value;
    }

    // Add profile picture URL if uploaded
    if (profilePictureUrl) data.profilePicture = profilePictureUrl;

    // Force user type = rider
    data.type = "rider";

    // Call service
    const rider = await createRider(data);

    return NextResponse.json(
      {
        status: "success",
        message: "Rider created successfully",
        data: rider,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating rider:", err);
    return handleError(err);
  }
}
