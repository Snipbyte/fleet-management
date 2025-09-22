import React from "react";

const cards = [
  { value: "12", label: "Trips This Month", color: "bg-[#007AFF1A]", text: "text-[#007AFF]" },
  { value: "14.5K", label: "Earnings (PKR)", color: "bg-[#AF52DE1A]", text: "text-[#AF52DE]" },
  { value: "4.8", label: "Avg Rating", color: "bg-[#FFCC001A]", text: "text-[#FFCC00]" },
  { value: "98.5%", label: "On-Time Rate", color: "bg-[#34C7591A]", text: "text-[#34C759]" },
];

export default function MonthlyPerformance() {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-4">Monthly Performance</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((item, idx) => (
          <div
            key={idx}
            className={`${item.color} p-4 rounded-xl`}
          >
            <p className={`text-xl font-bold ${item.text}`}>{item.value}</p>
            <p className="text-xs text-gray-600 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
