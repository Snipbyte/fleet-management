// src/services/rider/rider.js
import bcrypt from "bcrypt";
import User from "../../models/user";
import Rider from "../../models/rider";
import AppError from "../../lib/errors/AppError";
import { deleteFileFromFirebase } from "../../utils/uploadFileToFirebase.js";


export async function createRider(data) {
  try {
    // Check duplicate email
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) throw new AppError("Email already exists", 409);

    let hashedPassword = undefined;
    if (data.password) {
      hashedPassword = await bcrypt.hash(data.password, 10);
    }

    // Create User
    const user = await User.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      type: "rider",
      profilePicture: data.profilePicture || "",
    });

    // Create Rider record
    const rider = await Rider.create({
      userId: user._id,
      address: data.address,
    });

    return { user, rider };
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
    if (user.type !== "rider") throw new AppError("User is not a rider", 400);

    if (newPictureUploaded && user.profilePicture) {
      deleteFileFromFirebase(user.profilePicture).catch((err) => {
        console.warn("Failed to delete old profile picture:", err.message);
      });
    }

    Object.keys(updateData).forEach((key) => {
      if (key === "address") return; // address belongs to Rider
      user[key] = updateData[key];
    });

    await user.save();

    // Update Rider address if provided
    if (updateData.address) {
      await Rider.findOneAndUpdate({ userId }, { address: updateData.address });
    }

    return { user, rider: await Rider.findOne({ userId }) };
  } catch (err) {
    console.error("Error in updateRider:", err);
    if (err instanceof AppError) throw err;
    throw new AppError("Failed to update rider", 500);
  }
}

export async function deleteRider(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) throw new AppError("User not found", 404);
    if (user.type !== "rider") throw new AppError("User is not a rider", 400);

    if (user.profilePicture) {
      deleteFileFromFirebase(user.profilePicture).catch((err) => {
        console.warn("Failed to delete profile picture:", err.message);
      });
    }

    await Rider.deleteOne({ userId });
    await user.deleteOne();

    return { userId: user._id };
  } catch (err) {
    console.error("Error in deleteRider:", err);
    if (err instanceof AppError) throw err;
    throw new AppError("Failed to delete rider", 500);
  }
}


export async function getAllRiders(page = 1, limit = 10) {
  try {
    const skip = (page - 1) * limit;

    // Fetch riders with User info + Rider info
    const riders = await Rider.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate({
        path: "userId",
        select: "-password -__v -createdAt -updatedAt -type", // hide sensitive
      });

    const total = await Rider.countDocuments();

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