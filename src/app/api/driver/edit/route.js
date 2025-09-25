import { NextResponse } from "next/server";
import { connect } from "../../../../../utils/db";
import { uploadImageToFirebase } from "../../../../../utils/uploadFileToFirebase";
import AppError from "../../../../../lib/errors/AppError";
import { handleError } from "../../../../../lib/errors/handleError";
import { updateUser } from "../../../../../services/driver/driver";

export async function PUT(req) {
  try {
    await connect();

    const formData = await req.formData();

    const userId = formData.get("userId");
    if (!userId) throw new AppError("userId is required", 400);

    let profilePictureUrl = null;
    let newPictureUploaded = false;

    // Handle profile picture (optional)
    const profileFile = formData.get("profilePicture");
    if (profileFile && profileFile instanceof Blob && profileFile.size > 0) {
      const arrayBuffer = await profileFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filename = profileFile.name || "profile-picture.png";
      profilePictureUrl = await uploadImageToFirebase(
        "users/profilePictures",
        buffer,
        filename
      );
      newPictureUploaded = true;
    }

    // Collect update fields
    const updateData = {};
    for (const [key, value] of formData.entries()) {
      if (key !== "profilePicture" && key !== "userId") updateData[key] = value;
    }

    if (profilePictureUrl) updateData.profilePicture = profilePictureUrl;

    const updatedUser = await updateUser(userId, updateData, newPictureUploaded);

    return NextResponse.json(
      {
        status: "success",
        message: "User updated successfully",
        data: updatedUser,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error updating user:", err);
    return handleError(err);
  }
}
