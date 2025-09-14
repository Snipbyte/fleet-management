// components/common/Checklist.js

import { FiCheck } from "react-icons/fi";

export default function VehicleHistory({ points }) {
  return (
    <div className="space-y-2 p-3 border border-gray-200 rounded-lg my-4">
      {points.map((point, index) => (
        <div
          key={index}
          className="flex items-center gap-2"
        >
          <div className="w-6 h-6 rounded-full bg-[#F0FBF7] flex items-center justify-center flex-shrink-0">
            <FiCheck size={14} />
          </div>

          <p className="text-gray-800 text-xs">{point}</p>
        </div>
      ))}
    </div>
  );
}
