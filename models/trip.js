import mongoose from "mongoose";

const ExtraSchema = new mongoose.Schema(
  {
    extrasName: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
  },
  { _id: false } 
);

const PassengerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const TripSchema = new mongoose.Schema(
  {
    pickupLocation: {
      type: String,
      required: true,
      trim: true,
    },
    dropoffLocation: {
      type: String,
      required: true,
      trim: true,
    },
    pickupTime: {
      type: Date,
      required: true,
    },
    dropoffTime: {
      type: Date,
      required: false,
    },
    tripType: {
      type: String,
      enum: ["Airport transfer", "Hourly rate"],
      required: true,
    },
    flightNumber: {
      type: String,
      default: "",
      trim: true,
    },
    specialRequest: {
      type: String,
      default: "",
      trim: true,
    },
    isRoundTrip: {
      type: Boolean,
      default: false,
    },
    returnDate: {
      type: Date,
    },
    returnType: {
      type: String,
      enum: ["Same driver", "Different driver"],
      default: "Same driver",
    },
    carType: {
      type: String,
      enum: ["Business class", "Economy class"],
      required: true,
    },
    extras: [ExtraSchema],
    notesToDriver: {
      type: String,
      default: "",
      trim: true,
    },
    passengers: [PassengerSchema],
    assignedDriver: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver", 
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Trip || mongoose.model("Trip", TripSchema);
