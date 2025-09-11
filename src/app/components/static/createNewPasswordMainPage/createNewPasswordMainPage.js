"use client";
import React, { useState } from "react";
import Header from "../../common/header/header";
import Footer from "../../common/footer/footer";
import Input from "../../common/input/input";

export default function CreateNewPasswordMainPage() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Header />
      <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-md space-y-6">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[44px]">Set a New Password</h1>
            <p className="text-[#626262] text-center mt-3">
              Create a strong new password to secure your account.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* New Password */}
            <Input
              type={showNewPassword ? "text" : "password"}
              label={"New Password"}
              icon={
                <img
                  src={
                    showNewPassword
                      ? "/png/eye-open.png"
                      : "/png/eye-close.png"
                  }
                  className="w-5 cursor-pointer"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                />
              }
            />

            {/* Confirm Password */}
            <Input
              type={showConfirmPassword ? "text" : "password"}
              label={"Confirm Password"}
              icon={
                <img
                  src={
                    showConfirmPassword
                      ? "/png/eye-open.png"
                      : "/png/eye-close.png"
                  }
                  className="w-5 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              }
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800"
            >
              Change Password ↗
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
