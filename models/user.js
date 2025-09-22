// src/models/user.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: function () {
        // Password only required for manual signup, not Google
        return !this.googleId;
      },
    },
    phone: {
      type: String,
      required: true,
    },
    googleId: {
      type: String, // stores Google account ID
      required: false,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      enum: ["rider", "driver", "admin"],
      default: "rider",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
