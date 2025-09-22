"use client";
import React, { useState } from "react";
import Input from "../../../common/input/input";
import Button from "@/app/components/common/button/button"; 

const PasswordSection = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // your API call logic here
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Password</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="password"
          label="Current Password"
          required
          value={formData.currentPassword}
          onChange={handleChange("currentPassword")}
        />
        <Input
          type="password"
          label="New Password"
          required
          value={formData.newPassword}
          onChange={handleChange("newPassword")}
        />
        <Input
          type="password"
          label="Confirm Password"
          required
          value={formData.confirmPassword}
          onChange={handleChange("confirmPassword")}
        />

        <Button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default PasswordSection;
