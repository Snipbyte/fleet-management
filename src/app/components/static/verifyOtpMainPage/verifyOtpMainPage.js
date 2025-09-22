"use client";
import React, { useState, useEffect } from "react";
import Header from "../../common/header/header";
import OtpInput from "../../common/otpInput/otpInput";
import Footer from "../../common/footer/footer";
import { useRouter } from "next/navigation";

export default function VerifyOtpMainPage() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const router = useRouter()

  const onSubmit = (e) => {
    e.preventDefault();
    router.push("/ride-booking");
  }


  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleResend = () => {
    if (!canResend) return;
    // 👇 trigger resend OTP API here
    console.log("Resend OTP triggered");
    setTimeLeft(60);
    setCanResend(false);
  };

  return (
    <>

      <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-md space-y-6">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[44px]">Verify Your Identity</h1>
            <p className="text-[#626262] text-center mt-3">
              Enter the verification code we sent to your email/phone to reset
              your password.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            <OtpInput />

            {/* Resend + Timer */}
            <div className="flex justify-end items-center text-sm text-gray-600">
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-black font-medium hover:underline"
                >
                  Resend Code
                </button>
              ) : (
                <span>
                  Resend in{" "}
                  <span className="font-medium text-black">
                    00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                  </span>
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800"
            >
              Continue ↗
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
