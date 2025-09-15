"use client";
import { useRef, useState } from "react";

export default function OtpInput({ length = 6, onChange }) {
  const inputsRef = useRef([]);
  const [values, setValues] = useState(Array(length).fill(""));

  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); 
    const newValues = [...values];
    newValues[idx] = value;
    setValues(newValues);

    e.target.value = value;

    if (value && idx < length - 1) {
      inputsRef.current[idx + 1].focus();
    }

    if (onChange) {
      const otp = newValues.join("");
      onChange(otp);
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !e.target.value && idx > 0) {
      inputsRef.current[idx - 1].focus();
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          value={values[idx]}
          ref={(el) => (inputsRef.current[idx] = el)}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className={`
            w-14 h-12 text-center rounded-md text-lg font-medium focus:outline-none
            bg-[#F6F6F6] transition-colors
            ${values[idx] ? "border border-black" : "border border-transparent"}
          `}
        />
      ))}
    </div>
  );
}
