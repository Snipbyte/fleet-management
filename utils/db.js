import mongoose from "mongoose";
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  if (mongoose.connections[0].readyState !== 1) {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env file");
    }
    try {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
      throw new Error("Database connection failed");
    }
  } else {
    console.log("Already connected to MongoDB");
  }
};

export { connect };