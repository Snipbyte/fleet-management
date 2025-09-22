import React, { useState } from "react";
import Dropdowns from "../../../../common/dropdowns/dropdowns";
import InputField from "../../../../common/inputField/inputField";
import AddReceipt from "../addReceipt/addReceipt"

export default function Reimbursables({ data, updateField }) {
  const [showRecipt, setShowrecipt] = useState(false)
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2 sm:gap-0">
        <h1 className="font-semibold text-lg">Add-ons / Reimbursables</h1>
        <button onClick={() => setShowrecipt(true)} className="px-4 py-2 rounded-lg bg-inputBg text-sm sm:text-base">
          Add Receipt
        </button>
      </div>

      {/* First row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        <InputField
          label="Extra Stops"
          value={data.extraStops}
          onChange={(e) => updateField("extraStops", Number(e.target.value))}
          rightAddon="$"
        />
        <InputField
          label="Tools"
          value={data.tools}
          onChange={(e) => updateField("tools", Number(e.target.value))}
        />
        <InputField
          label="Parking"
          value={data.parking}
          onChange={(e) => updateField("parking", Number(e.target.value))}
        />
      </div>

      {/* Second row */}
      <div className="flex flex-col lg:flex-row mt-4 gap-4 lg:gap-6">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <InputField
            label="Airport Fees"
            value={data.airportFees}
            onChange={(e) => updateField("airportFees", Number(e.target.value))}
          />
          <Dropdowns
            label="Fuel Supercharge"
            value={data.fuelType}
            options={["$", "￥", "ꘪ"]}
            onChange={(val) => updateField("fuelType", val)}
          />
          <InputField
            label="Fuel Charge"
            value={data.fuelCharge}
            onChange={(e) => updateField("fuelCharge", Number(e.target.value))}
          />
        </div>

        <div className="w-full lg:w-[30%]">
          {/* You can add extra fields or summary here */}
        </div>
      </div>

      {showRecipt && <AddReceipt isOpen={showRecipt} onClose={() => setShowrecipt(false)} onConfirm={() => setShowrecipt(false)} />}
    </div>
  );
}
