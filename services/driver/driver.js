import mongoose from "mongoose";
import User from "../../models/user";
import Driver from "../../models/driver";
import AppError from "../../lib/errors/AppError";
import bcrypt from "bcrypt"; 
import { deleteFileFromFirebase } from "../../utils/uploadFileToFirebase";

export async function createDriver(data) {
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

    // Create User with type "driver"
    const user = await User.create({
      name: data.name,
      email: data.email,
      password: hashedPassword, // hashed password
      phone: data.phone,
      type: "driver",
      profilePicture: data.profilePicture || "",
    });

    // Create Driver record linked to user
    const driver = await Driver.create({
      userId: user._id,
      license: data.license, // plain string license number
    });

    return { user, driver };
  } catch (err) {
    console.error("Error in createDriver:", err);
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      throw new AppError(`${field} already exists`, 409);
    }
    if (err instanceof AppError) throw err;
    throw new AppError("Failed to create driver", 500);
  }
}

export async function updateUser(userId, updateData, newPictureUploaded = false) {
  try {
    const user = await User.findById(userId);
    if (!user) throw new AppError("User not found", 404);

    // Try deleting old picture, but don’t block update
    if (newPictureUploaded && user.profilePicture) {
      deleteFileFromFirebase(user.profilePicture).catch((err) => {
        console.warn("Failed to delete old profile picture:", err.message);
      });
    }

    // Only update fields provided
    Object.keys(updateData).forEach((key) => {
      user[key] = updateData[key];
    });

    await user.save();

    return user;
  } catch (err) {
    console.error("Error in updateUser:", err);
    if (err instanceof AppError) throw err;
    throw new AppError("Failed to update user", 500);
  }
}



export async function getAllDrivers(page = 1, limit = 10) {
  try {
    const skip = (page - 1) * limit;

    // Fetch drivers with user info populated
    const drivers = await Driver.find()
      .populate("userId", "-password -__v -updatedAt") // hide sensitive fields
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const totalDrivers = await Driver.countDocuments();

    return {
      drivers,
      pagination: {
        total: totalDrivers,
        page,
        limit,
        totalPages: Math.ceil(totalDrivers / limit),
      },
    };
  } catch (err) {
    console.error("Error in getAllDrivers:", err);
    throw new AppError("Failed to fetch drivers", 500);
  }
}

export async function deleteDriver(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) throw new AppError("User not found", 404);

    // Delete profile picture from Firebase if exists
    if (user.profilePicture) {
      deleteFileFromFirebase(user.profilePicture).catch((err) =>
        console.warn("Failed to delete profile picture:", err.message)
      );
    }

    // Convert userId to ObjectId before querying Driver
    const objectId = new mongoose.Types.ObjectId(userId);

    const driver = await Driver.findOneAndDelete({ userId: objectId });
    if (!driver) throw new AppError("Driver not found", 404);

    // Delete user record
    await User.findByIdAndDelete(userId);

    return true;
  } catch (err) {
    console.error("Error in deleteDriver:", err);
    if (err instanceof AppError) throw err;
    throw new AppError("Failed to delete driver", 500);
  }
}