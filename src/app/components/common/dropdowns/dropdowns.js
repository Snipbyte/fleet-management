"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Dropdowns({ label, value, options = [], onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col w-full relative" ref={dropdownRef}>
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-2">{label}</label>
      )}

      {/* Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-4 py-3 rounded-lg border transition-all 
          ${isOpen ? "border-btnHover" : "border-gray-200"} 
          bg-inputBg hover:border-btnHover focus:outline-none focus:bg-activeBeige
        `}
      >
        <span className="text-sm text-gray-800">{value || "Select an option"}</span>
        <FiChevronDown
          size={16}
          className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown List - below button, aligned right */}
      {isOpen && (
        <div className="absolute top-[80%] p-2 right-0 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-100 overflow-y-auto max-h-48">
          {options.length > 0 ? (
            options.map((option, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 text-sm rounded-lg cursor-pointer hover:bg-btnHover hover:text-white transition-colors
                  ${option === value ? "bg-gray-100 font-medium" : ""}
                `}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">
              No options available
            </div>
          )}
        </div>
      )}
    </div>
  );
}
