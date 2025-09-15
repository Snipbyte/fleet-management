"use client";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function ExtraOptionCard({ title, description, price, showPrice = true }) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col border-b border-gray-200 py-4">
      {/* Top row: Title + Price + Counter */}
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-2">
          <h3 className="text-base font-medium text-gray-900">{title}</h3>
          {showPrice &&
            <span className="px-2 py-0.5 bg-[#c7a574] text-white text-xs rounded-md font-semibold">
              ${price}
            </span>
          }
        </div>

        {/* Counter */}
        <div className="flex items-center gap-3 relative">
          <button
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-40"
            onClick={() => setCount((c) => Math.max(0, c - 1))}
            disabled={count === 0}
          >
            <FiMinus className="text-gray-700" />
          </button>
          <span className="w-4 text-center">{count}</span>
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center bg-black"
            onClick={() => setCount((c) => c + 1)}
          >
            <FiPlus className="text-white" />
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  );
}
