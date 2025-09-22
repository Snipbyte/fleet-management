import React from "react";

const RowItem = ({ title, value, colorsApplied }) => (
  <div className="flex items-center justify-between space-y-2">
    <p className={`${colorsApplied ? "text-black font-semibold" : "text-gray-600"}`}>{title}</p>
    <p className={`${colorsApplied ? "text-btnHover font-semibold" : "text-black"}`}>${value}</p>
  </div>
);

export default function TotalPayments({ totals }) {
  return (
    <div className="bg-inputBg p-6 rounded-2xl mt-4">
      <h1 className="font-semibold text-lg mb-4">Total Payments</h1>
      <RowItem title="Earnings before deductions" value={totals.earningsBeforeDeductions.toFixed(2)} />
      <RowItem title="Total deductions" value={totals.deductions.toFixed(2)} />
      <RowItem title="Net Trip Pay:" value={totals.netTripPay.toFixed(2)} colorsApplied />
    </div>
  );
}
