import mongoose from "mongoose";

const RiderSchema = new mongoose.Schema(
  {
    riderId: {
      type: Number,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Auto-increment riderId
RiderSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const lastRider = await mongoose.models.Rider.findOne().sort({ riderId: -1 });

      if (lastRider) {
        this.riderId = lastRider.riderId + 1;
      } else {
        this.riderId = 1;
      }
    } catch (err) {
      return next(err);
    }
  }
  next();
});

export default mongoose.models.Rider || mongoose.model("Rider", RiderSchema);
