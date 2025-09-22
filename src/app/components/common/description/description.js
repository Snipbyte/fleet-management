"use client";
import { useState } from "react";

export default function DescriptionField({
  label = "Description",
  required = false,
  error,
  rows = 4,
  value,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative w-full mb-6">
      {/* Textarea */}
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`
          peer w-full border rounded-[10px] px-4 py-3 resize-none
          transition-all duration-200 outline-none bg-[#F6F6F6]
          ${focused
            ? "border-[#181A1F] border bg-transparent"
            : "border-[#F6F6F6] focus:ring-0"}
        `}
        placeholder=" " // placeholder is hidden, floating label handles text
        {...props}
      />

      {/* Floating Label */}
      <label
        className={`
          absolute left-4 pointer-events-none
          transition-all duration-200
          ${focused || value
            ? "text-xs -top-2 text-[#181A1F] bg-white px-1"
            : "text-[#181A1F] top-3"}
        `}
      >
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>
      )}
    </div>
  );
}
