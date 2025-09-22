"use client";
import React, { useState, useRef, useEffect } from "react";

export default function Tab({ options = [], defaultIndex = 0, onChange, children }) {
  const [selected, setSelected] = useState(defaultIndex);
  const [sliderStyle, setSliderStyle] = useState({ width: "0px", left: "0px" });
  const tabRefs = useRef([]);

  const handleToggle = (index) => {
    setSelected(index);
    if (onChange) onChange(index);
  };

  useEffect(() => {
    if (tabRefs.current[selected]) {
      const el = tabRefs.current[selected];
      setSliderStyle({
        width: `${el.offsetWidth}px`,
        left: `${el.offsetLeft}px`,
      });
    }
  }, [selected, options]);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="relative w-full bg-white rounded-lg p-2 overflow-x-auto">
        <div className="flex relative w-full">
          {options.map((option, index) => (
            <button
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`relative z-10 flex-1 text-center px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${selected === index
                ? "text-white"
                : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => handleToggle(index)}
            >
              {option}
            </button>

          ))}

          {/* Sliding background */}
          <div
            className="absolute top-0 bottom-0 z-0 bg-btnHover rounded-md transition-all duration-300 ease-in-out"
            style={sliderStyle}
          />
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {Array.isArray(children) ? children[selected] : children}
      </div>
    </div>
  );
}
