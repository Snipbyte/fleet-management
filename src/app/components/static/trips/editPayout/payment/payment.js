import React from "react";
import Dropdowns from "../../../../common/dropdowns/dropdowns";

export default function Payment({ data, updateField }) {
  return (
    <>
      <h1 className="font-semibold text-lg">Payment Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <Dropdowns
          label="Status"
          value={data.status}
          options={["Pending", "Approved", "Cancelled"]}
          onChange={(val) => updateField("status", val)}
        />
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2 min-h-[20px]">
            Notes
          </label>
          <div
            className={`relative flex items-center rounded-[10px] border px-4 py-3 transition-all duration-200 bg-[#F6F6F6] hover:border-[#181A1F]/50`}
          >
            <input
              type="text"
              value={data.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-black placeholder:text-gray-400"
              placeholder="Enter notes..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
