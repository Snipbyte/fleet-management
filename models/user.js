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
        return !this.googleId;
      },
    },
    phone: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
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
    status:{
     type:String,
     enum:["active","inactive"],
     default:"active"
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
