import React from "react";

export default function SelectedVehicleCard() {
  const extras = [
    "1 x Child seat - $500",
    "1 x GPS Navigation - $200",
    "1 x Extra Driver - $800",
    "1 x WiFi Hotspot - $300",
    "1 x Luggage Rack - $150",
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg">
      {/* Title */}
      <div className="my-4 border-t border-gray-200"></div>
      <h2 className="text-sm text-[#626262]">Vehicle</h2>

      {/* Vehicle Name */}
      <p className="mt-1 text-balance font-medium">
        Toyota Corolla 2024
      </p>

      {/* Divider */}
      <div className="my-4 border-t border-gray-200"></div>

      {/* Extras */}
      <h3 className="text-sm font-medium text-[#626262] mb-2">Extra Option</h3>
      <ul className="space-y-2">
        {extras.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between text-sm text-[#181A1F]"
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
