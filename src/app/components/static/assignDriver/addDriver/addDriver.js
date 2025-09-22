"use client";
import React, { useState } from "react";
import Input from "../../../common/input/input";

export default function AddDriver({ onSave }) {
  const [form, setForm] = useState({
    driverId: "",
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    license: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (onSave) onSave(form);
    console.log("Driver Saved:", form);
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          label="Full Name"
        />
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          label="Email"
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          label="Phone Number"
        />
        <Input
          type="text"
          name="license"
          value={form.license}
          onChange={handleChange}
          label="Licence Number"
        />
      </div>

      <Input
        type="text"
        name="vehicle"
        value={form.vehicle}
        onChange={handleChange}
        label="Vehicle"
      />

      {/* Row 4 (Status) */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">Status</p>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="status"
              value="Active"
              checked={form.status === "Active"}
              onChange={handleChange}
              className="text-yellow-500 focus:ring-yellow-400"
            />
            Active
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="status"
              value="Inactive"
              checked={form.status === "Inactive"}
              onChange={handleChange}
              className="text-white"
            />
            Inactive
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-8 py-2.5 bg-black text-white font-medium rounded-lg shadow transition"
        >
          Save
        </button>
      </div>
    </div>
  );
}
