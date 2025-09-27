import React from 'react'
import DriverInfo from "../driverInfo/driverInfo"
import AdminHeader from '../../../../common/adminHeader/adminHeader';
import Tab from "../../../../common/tab/tab"
import Overview from "../overview/overview"
import PayrollInfo from "../payrollInfo/payrollInfo"
import RecentTrip from "../recentTrip/recentTrip"
import PayrollHistory from "../payrollHistory/payrollHistory"

const options = ["Overview", "Payroll Info", "Recent Trip", "Payroll History"];

export default function DriverDetailsMainPage() {
  const driver = {
    name: "John Smith",
    id: "DRV789",
    phone: "+1 555-0123",
    email: "alley@gmail.com",
    dateTime: "Thu, Oct 06, 2022 @ 6:15pm",
    avatar: "https://via.placeholder.com/150",
  };


  return (
    <div className="p-4">
      <AdminHeader title="Driver Details" showIcon={true} showButtons={false} />
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 mt-2">
        <div className="lg:col-span-3">
          <DriverInfo driver={driver} />
        </div>
        <div className="lg:col-span-7">
          <Tab options={options}>
            <Overview />
            <PayrollInfo />
            <RecentTrip />
            <PayrollHistory />
          </Tab>
        </div>
      </div>
    </div>
  );
}
