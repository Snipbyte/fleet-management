
import mongoose from "mongoose";

const DriverSchema = new mongoose.Schema(
  {
    driverId: {
      type: Number,
      required: true,
      trim: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

DriverSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const lastDriver = await mongoose.models.Driver.findOne().sort({ driverId: -1 });

      if (lastDriver) {
        this.driverId = lastDriver.driverId + 1;
      } else {
        this.driverId = 1; 
      }
    } catch (err) {
      return next(err);
    }
  }
  next();
});
export default mongoose.models.Driver || mongoose.model("Driver", DriverSchema);
