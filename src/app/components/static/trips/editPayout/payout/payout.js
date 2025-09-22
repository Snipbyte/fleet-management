// src/components/payout/Payout.jsx
"use client"
import React, { useState, useMemo } from "react";
import ProfileCard from "../profileCard/profileCard";
import PayBasis from "../payBasis/payBasis";
import Gratuities from "../gratuties/gratuties";
import Deductions from "../deductions/deductions";
import Payment from "../payment/payment";
import TotalPayments from "../totalPayments/totalPayments";
import Reimbursables from "../reimbursables/reimbursables";

export default function Payout() {
  const [formData, setFormData] = useState({
    // Pay Basis
    payType: "Hourly",
    hourlyRate: 300,
    billableHours: 2.5,
    otHours: 0,
    otRate: 45,
    waitingHours: 0,
    waitingRate: 10,
    mileage: 0,
    mileageRate: 10,

    // Gratuities
    totalGratuity: 45,
    gratuityPercent: 10,
    gratuityToDriver: 60,
    extraGratuity: 10,

    // Reimbursables
    extraStops: 300,
    tools: 2.5,
    parking: 45,
    airportFees: 45,
    fuelType: "hourly",
    fuelCharge: 0,

    // Deductions
    commissionType: "$",
    commissionValue: 10,
    advances: 50,

    // Payment
    status: "$",
    notes: "",
  });

  //  Universal updater
  const updateField = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  // Calculations
  const totals = useMemo(() => {
    const basePay =
      formData.hourlyRate * formData.billableHours +
      formData.otHours * formData.otRate +
      formData.waitingHours * formData.waitingRate +
      formData.mileage * formData.mileageRate;

    const gratuityPay =
      (formData.totalGratuity * formData.gratuityPercent) / 100 +
      formData.extraGratuity;

    const reimbursables =
      formData.extraStops +
      formData.tools +
      formData.parking +
      formData.airportFees +
      formData.fuelCharge;

    const earningsBeforeDeductions = basePay + gratuityPay + reimbursables;

    const deductions = formData.commissionValue + formData.advances;

    const netTripPay = earningsBeforeDeductions - deductions;

    return {
      basePay,
      gratuityPay,
      reimbursables,
      earningsBeforeDeductions,
      deductions,
      netTripPay,
    };
  }, [formData]);

  return (
    <div className="p-4 bg-white rounded-xl mt-2">
      <h1 className="mb-3 font-semibold text-xl">Driver Payouts</h1>
      <div className="min-h-screen">
        <ProfileCard payout={totals.netTripPay} />
        <PayBasis data={formData} updateField={updateField} total={totals.basePay} />
        <Gratuities data={formData} updateField={updateField} total={totals.gratuityPay} />
        <Reimbursables data={formData} updateField={updateField} />
        <Deductions data={formData} updateField={updateField} />
        <Payment data={formData} updateField={updateField} />

        <TotalPayments totals={totals} />
      </div>
    </div>
  );
}
