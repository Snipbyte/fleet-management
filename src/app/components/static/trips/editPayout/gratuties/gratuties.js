import React from "react";
import InputField from "../../../../common/inputField/inputField";

export default function Gratuities({ data, updateField, total }) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold text-lg">Gratuities</h1>
        <div className="flex items-center gap-2 bg-activeBeige px-2 py-1 rounded-md">
          <p className="text-sm font-medium">Total To Driver</p>
          <h1 className="text-btnHover font-semibold">${total.toFixed(2)}</h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <InputField
          label="Total Gratuity"
          value={data.totalGratuity}
          onChange={(e) => updateField("totalGratuity", Number(e.target.value))}
        />
        <div className="flex items-center gap-2">
          <InputField
            label="% to driver"
            value={data.gratuityPercent}
            onChange={(e) => updateField("gratuityPercent", Number(e.target.value))}
          />
          <InputField
            label=" "
            value={data.gratuityToDriver}
            onChange={(e) => updateField("gratuityToDriver", Number(e.target.value))}
          />
        </div>
        <InputField
          label="Extra Gratuity"
          value={data.extraGratuity}
          onChange={(e) => updateField("extraGratuity", Number(e.target.value))}
        />
      </div>
    </>
  );
}
