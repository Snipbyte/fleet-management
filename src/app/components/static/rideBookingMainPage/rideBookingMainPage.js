"use client";
import React, { useState } from "react";
import IOSSwitch from "../../common/iosSwitch/iosSwitch";
import Input from "../../common/input/input";
import DescriptionField from "../../common/description/description";

export default function RideBookingMainPage() {
  const [enabled, setEnabled] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    description: "",
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Handle field updates
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // clear error on typing
  };

  // Validation on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.pickup.trim()) newErrors.pickup = "Pickup location is required";
    if (!formData.dropoff.trim()) newErrors.dropoff = "Drop-off location is required";
    if (!formData.date) newErrors.date = "Pickup date is required";
    if (!formData.time) newErrors.time = "Pickup time is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Form submitted:", formData);
      // send data to backend here
    }
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[44px]">Book Your Trip</h1>
        <p className="text-[#626262] text-center mt-3">
          Tell us your travel details for a premium experience
        </p>
      </div>

      {/* toggle button */}
      <div className="max-w-[760px] w-full">
        <div className="w-full flex items-center justify-between">
          <h1>Trip Type</h1>
          <div className="flex items-center gap-2 py-5">
            <p>One-Way</p>
            <IOSSwitch checked={enabled} onChange={setEnabled} />
          </div>
        </div>

        {/* form fields */}
        <form onSubmit={handleSubmit}>
          <h1 className="mb-6">Pickup details</h1>

          <div className="flex items-center justify-between gap-4">
            <Input
              label="Pickup location"
              value={formData.pickup}
              onChange={(e) => handleChange("pickup", e.target.value)}
              error={errors.pickup}
              required
            />
            <Input
              label="Drop-off location"
              value={formData.dropoff}
              onChange={(e) => handleChange("dropoff", e.target.value)}
              error={errors.dropoff}
              required
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <Input
              label="Pickup date"
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              error={errors.date}
              required
            />
            <Input
              label="Pickup time"
              type="time"
              value={formData.time}
              onChange={(e) => handleChange("time", e.target.value)}
              error={errors.time}
              required
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Input
              label="Return date"
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              error={errors.date}
              required
            />
            <Input
              label="Return time"
              type="time"
              value={formData.time}
              onChange={(e) => handleChange("time", e.target.value)}
              error={errors.time}
              required
            />
          </div>
          <Input
              label="Fligt number"
              value={formData.dropoff}
              onChange={(e) => handleChange("dropoff", e.target.value)}
              error={errors.dropoff}
              required
            />

          <DescriptionField
            label="Write your description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            error={errors.description}
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800"
          >
            Continue to Vehicle
          </button>
        </form>
      </div>
    </div>
  );
}
