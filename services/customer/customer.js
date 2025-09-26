// src/services/rider/rider.js
import bcrypt from "bcrypt";
import User from "../../models/user";
import AppError from "../../lib/errors/AppError";
import { deleteFileFromFirebase } from "../../utils/uploadFileToFirebase.js";

export async function createRider(data) {
  try {
    // Check duplicate email
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      throw new AppError("Email already exists", 409);
    }

    // Hash password before saving (if provided)
    let hashedPassword = undefined;
    if (data.password) {
      hashedPassword = await bcrypt.hash(data.password, 10);
    }

    // Create User with type "rider"
    const user = await User.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      address: data.address,
      type: "rider",
      profilePicture: data.profilePicture || "",
    });

    // No extra Rider model (like Driver) → just return User
    return { user };
  } catch (err) {
    console.error("Error in createRider:", err);
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      throw new AppError(`${field} already exists`, 409);
    }
    if (err instanceof AppError) throw err;
    throw new AppError("Failed to create rider", 500);
  }
}



export async function updateRider(userId, updateData, newPictureUploaded = false) {
  try {
    const user = await User.findById(userId);
    if (!user) throw new AppError("User not found", 404);

    // Ensure only riders can be updated here
    if (user.type !== "rider") {
      throw new AppError("User is not a rider", 400);
    }

    // Try deleting old picture (non-blocking)
    if (newPictureUploaded && user.profilePicture) {
      deleteFileFromFirebase(user.profilePicture).catch((err) => {
        console.warn("Failed to delete old profile picture:", err.message);
      });
    }

    // Update only provided fields
    Object.keys(updateData).forEach((key) => {
      user[key] = updateData[key];
    });

    await user.save();

    return user;
  } catch (err) {
    console.error("Error in updateRider:", err);
    if (err instanceof AppError) throw err;
    throw new AppError("Failed to update rider", 500);
  }
}


export async function deleteUser(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) throw new AppError("User not found", 404);

    // Try deleting profile picture from Firebase (non-blocking)
    if (user.profilePicture) {
      deleteFileFromFirebase(user.profilePicture).catch((err) => {
        console.warn("Failed to delete profile picture:", err.message);
      });
    }

    await user.deleteOne();

    return { userId: user._id, type: user.type };
  } catch (err) {
    console.error("Error in deleteUser:", err);
    if (err instanceof AppError) throw err;
    throw new AppError("Failed to delete user", 500);
  }
}

export async function getAllRiders(page = 1, limit = 10) {
  try {
    const skip = (page - 1) * limit;

    // Fetch only riders (hide sensitive fields)
    const riders = await User.find({ type: "rider" })
      .select("-password -type -__v -createdAt -updatedAt") // hide these fields
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }); // latest first

    const total = await User.countDocuments({ type: "rider" });

    return {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      riders,
    };
  } catch (err) {
    console.error("Error in getAllRiders:", err);
    throw new AppError("Failed to fetch riders", 500);
  }
}

