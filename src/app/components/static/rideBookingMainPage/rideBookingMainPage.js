"use client";
import React, { useState } from "react";
import IOSSwitch from "../../common/iosSwitch/iosSwitch";
import Input from "../../common/input/input";
import DescriptionField from "../../common/description/description";
import ToggleButton from "../../common/toggleButton/toggleButton";
import { useRouter } from "next/navigation";

export default function RideBookingMainPage() {
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();

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
      console.log("form submitted:", formData);
      // navigate to verify-otp page
      router.push("/vehicle-selection");
    }
  };

  const flightOptions = [
    { label: 'Airport Transfer', value: 'airport-transfer' },
    { label: 'Hourly Ride', value: 'hourly-ride' },
  ];

  const handleFlightToggle = (value) => {
    console.log('Selected flight option:', value);
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center mb-10">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[44px]">Book Your Trip</h1>
        <p className="text-[#626262] text-center mt-3">
          Tell us your travel details for a premium experience
        </p>
      </div>
      {/* toggle button */}
      <div className="max-w-[760px] w-full mt-10">
        <h1 className="font-medium mb-4">Ride Type</h1>
        <ToggleButton
          options={flightOptions}
          onToggle={handleFlightToggle}
          defaultSelected={0}
        />
        <div className="w-full flex items-center justify-between my-2">
          <h1 className="font-medium">Trip Type</h1>
          <div className="flex items-center gap-2 py-5">
            <p>{enabled ? "One-Way" : "Round-Trip"}</p>
            <IOSSwitch checked={enabled} onChange={setEnabled} />
          </div>
        </div>

        {/* form fields */}
        <form onSubmit={handleSubmit}>
          <h1 className="mb-6 font-medium">Pickup details</h1>
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
          {!enabled &&
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
          }
          <Input
            label="Fligt number"
            type="number"
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
