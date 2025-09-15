// components/ToggleButton.jsx
'use client';

import { useState } from 'react';

const ToggleButton = ({ options, onToggle, defaultSelected = 0 }) => {
  const [selected, setSelected] = useState(defaultSelected);

  const handleToggle = (index) => {
    setSelected(index);
    onToggle && onToggle(options[index].value);
  };

  return (
    <div className="relative w-full inline-flex bg-gray-100 rounded-xl p-1 shadow-inner">
      <div className="flex relative w-full">
        {options.map((option, index) => (
          <button
            key={index}
            className={`relative w-full h-[50px] z-10 px-4 text-sm font-medium rounded-md transition-colors duration-300 ${
              selected === index 
                ? 'text-black' 
                : 'text-gray-700 hover:text-gray-800'
            }`}
            onClick={() => handleToggle(index)}
          >
            {option.label}
          </button>
        ))}
        <div 
          className="absolute inset-y-0 left-0 z-0 bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out"
          style={{
            width: `${100 / options.length}%`,
            transform: `translateX(${selected * 100}%)`
          }}
        />
      </div>
    </div>
  );
};

export default ToggleButton;