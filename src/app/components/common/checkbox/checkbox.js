"use client";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

export default function Checkbox({ label, checked: defaultChecked = false, onChange }) {
  const [checked, setChecked] = useState(defaultChecked);

  const toggleCheck = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <label
      className="flex items-center gap-2 cursor-pointer select-none text-gray-700"
      onClick={toggleCheck}
    >
      {/* Box */}
      <span
        className={`
          w-5 h-5 flex items-center justify-center rounded border 
          transition-all duration-200
          ${checked ? "bg-black border-black" : "bg-white border-gray-400"}
        `}
      >
        {checked && <FiCheck className="text-white text-sm" />}
      </span>

      {/* Label */}
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}
