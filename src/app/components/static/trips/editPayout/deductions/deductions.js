import React from "react";
import Dropdowns from "../../../../common/dropdowns/dropdowns";
import InputField from "../../../../common/inputField/inputField";

export default function Deductions({ data, updateField }) {
  return (
    <>
      <h1 className="font-semibold text-lg">Deductions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="flex gap-2">
          <Dropdowns
            label="Commission split"
            value={data.commissionType}
            options={["$", "￥", "ꘪ"]}
            onChange={(val) => updateField("commissionType", val)}
          />
          <InputField
            label=" "
            value={data.commissionValue}
            onChange={(e) => updateField("commissionValue", Number(e.target.value))}
            rightAddon="$"
          />
        </div>
        <InputField
          label="Advances Repayment"
          value={data.advances}
          onChange={(e) => updateField("advances", Number(e.target.value))}
        />
      </div>
    </>
  );
}
