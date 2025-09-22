import React from "react";
import DriverInfoCard from "./DriverInfoCard";
import Tabs from "./Tabs";
import VehicleInfo from "./VehicleInfo";
import MonthlyPerformance from "./MonthlyPerformance";

export default function Dashboard() {
  const driver = {
    name: "John Smith",
    id: "DRV789",
    phone: "+1 555-0123",
    email: "alley@gmail.com",
    dateTime: "Thu, Oct 06, 2022 @ 6:15pm",
    avatar: "https://via.placeholder.com/150",
  };

  const vehicle = {
    model: "Toyota Camry",
    rate: "$120",
    year: "2022",
    plate: "LHR-1234",
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Left Sidebar */}
      <DriverInfoCard driver={driver} />

      {/* Right Section */}
      <div className="flex-1">
        <Tabs options={["Overview", "Payroll Info", "Recent Trip", "Payroll History"]}>
          {/* Overview Content */}
          <div>
            <VehicleInfo vehicle={vehicle} />
            <MonthlyPerformance />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">Payroll Info Content</div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">Recent Trip Content</div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">Payroll History Content</div>
        </Tabs>
      </div>
    </div>
  );
}
