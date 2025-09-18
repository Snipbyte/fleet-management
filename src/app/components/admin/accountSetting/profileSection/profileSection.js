"use client";
import React, { useRef, useState } from "react";
import Input from "../../../common/input/input";
import Button from "@/app/components/common/button/button"; 
import { FiCamera } from "react-icons/fi";

const ProfileSection = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState("John Smith");

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Preview uploaded image
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", { fullName, profileImage });
    // API call for updating profile here
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Edit Profile</h2>

      {/* Profile Image Upload */}
      <div className="flex items-start gap-6 mb-6">
        <div className="relative w-20 h-20 rounded-full overflow-hidden">
          <img
            src={profileImage || "/images/jpg/image.png"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={handleImageClick}
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-white"
          >
            <FiCamera size={20} />
          </button>
          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        <div className="text-sm text-gray-500">
          <p>Recommended size: 300px X 300px</p>
          <p>Supported format: jpg, jpeg, png</p>
          <p>Max size: 2mb</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          label="Full Name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <Button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default ProfileSection;
