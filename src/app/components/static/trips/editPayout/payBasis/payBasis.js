import React from "react";
import Dropdowns from "../../../../common/dropdowns/dropdowns";
import InputField from "../../../../common/inputField/inputField";

export default function PayBasis({ data, updateField, total }) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold text-lg">Pay Basis</h1>
        <div className="flex items-center gap-2 bg-activeBeige px-2 py-1 rounded-md">
          <p className="text-sm font-medium">Calculated base pay</p>
          <h1 className="text-btnHover font-semibold">${total}</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <Dropdowns
          label="Select Pay Type"
          value={data.payType}
          options={["$", "￥", "ꘪ"]}
          onChange={(val) => updateField("payType", val)}
        />
        <InputField
          label="Hourly Rate"
          value={data.hourlyRate}
          onChange={(e) => updateField("hourlyRate", Number(e.target.value))}
          rightAddon="$"
        />
        <InputField
          label="Billable Hours"
          value={data.billableHours}
          onChange={(e) => updateField("billableHours", Number(e.target.value))}
        />
      </div>
    </>
  );
}
