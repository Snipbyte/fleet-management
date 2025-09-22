import React from 'react'
import VehicleInfo from "../overview/vehicleInfo/vehicleInfo"
import MonthlyPerformance from "../overview/monthlyPerformance/monthlyPerformance"
export default function Overview() {
  const vehicle = {
    model: "Toyota Camry",
    rate: "$120",
    year: "2022",
    plate: "LHR-1234",
  };

  return (
    <>
      <VehicleInfo vehicle={vehicle} />
      <MonthlyPerformance />
    </>
  )
}
