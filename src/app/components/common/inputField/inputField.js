"use client";
import { useState } from "react";

export default function InputField({
  label,
  type = "text",
  showIcon = true,
  error,
  required = false,
  value,
  onChange,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full mb-5">
      {/* Always render label space */}
      <label className="block text-sm font-medium text-gray-800 mb-2 min-h-[20px]">
        {label} {required && <span className="text-red-600">*</span>}
      </label>

      <div
        className={`relative flex items-center rounded-[10px] border px-4 py-2 transition-all duration-200
          ${focused ? "border-[#181A1F] shadow-sm" : ""}
          bg-[#F6F6F6] hover:border-[#181A1F]/50
        `}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent outline-none text-sm text-black placeholder:text-gray-400"
          {...props}
        />

        {showIcon && (
          <img
            src={"/images/png/updown.png"}
            className="cursor-pointer w-4"
            alt="icon"
          />
        )}
      </div>

      {error && (
        <div className="flex items-center gap-1 mt-1">
          <img src="/images/png/ibutton.png" className="w-4" alt="error" />
          <p className="text-red-500 text-xs">{error}</p>
        </div>
      )}
    </div>
  );
}
