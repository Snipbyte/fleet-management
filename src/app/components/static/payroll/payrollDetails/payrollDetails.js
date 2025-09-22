"use client";
import React, { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import FilterBar from "../../../common/filterbar/filterbar";
import Table from "../../../common/table/table";
import CustomModal from "../../../common/modal/modal";
import TripInformationDialog from "../tripInformationDialog/tripInformationDialog";


// ✅ Time Filters
const timeFilters = [
  { label: "Today", value: "today" },
  { label: "This Week", value: "this_week" },
  { label: "This Month", value: "this_month" },
];

// ✅ Status Filters (updated)
const statuses = [
  { label: "All Status", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "In Progress", value: "in_progress" },
  { label: "Success", value: "success" },
  { label: "Ongoing", value: "ongoing" },
  { label: "Rejected", value: "rejected" },
];

// ✅ Dummy Table Data
const tableData = [
  {
    no: 1,
    tripid: "TRIP-1001",
    dateTime: "2025-09-21 10:30 AM",
    assignedDriver: "Tommi jenkins",
    hours: "2.5h",
    driverRate: "$5435.63",
    basepay: "$203",
    gratuity: "$100",
    reimbursables: "$230",
    deductions: "$1000",
    nettrippay: "$23000",
    tripstatus: "Pending",
    payrollstatus: "Pending",
    actions: "",
  },
  {
    no: 1,
    tripid: "TRIP-1001",
    dateTime: "2025-09-21 10:30 AM",
    assignedDriver: "Tommi jenkins",
    hours: "2.5h",
    driverRate: "$5435.63",
    basepay: "$203",
    gratuity: "$100",
    reimbursables: "$230",
    deductions: "$1000",
    nettrippay: "$23000",
    tripstatus: "In Progress",
    payrollstatus: "Pending",
    actions: "",
  },
  {
    no: 1,
    tripid: "TRIP-1001",
    dateTime: "2025-09-21 10:30 AM",
    assignedDriver: "Tommi jenkins",
    hours: "2.5h",
    driverRate: "$5435.63",
    basepay: "$203",
    gratuity: "$100",
    reimbursables: "$230",
    deductions: "$1000",
    nettrippay: "$23000",
    tripstatus: "Completed",
    payrollstatus: "Paid",
    actions: "",
  },
  {
    no: 1,
    tripid: "TRIP-1001",
    dateTime: "2025-09-21 10:30 AM",
    assignedDriver: "Tommi jenkins",
    hours: "2.5h",
    driverRate: "$5435.63",
    basepay: "$203",
    gratuity: "$100",
    reimbursables: "$230",
    deductions: "$1000",
    nettrippay: "$23000",
    tripstatus: "Rejected",
    payrollstatus: "Approved",
    actions: "",
  },
];

// ✅ Highlight Search Text
function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="bg-yellow-200 font-medium">
        {part}
      </span>
    ) : (
      part
    )
  );
}

// ✅ Status Color Utility (covers all statuses)
function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case "completed":
    case "paid":
    case "processed":
    case "success":
      return "bg-green-100 text-green-700";
    case "pending":
      return "bg-purple-100 text-purple-700";
    case "unpaid":
      return "bg-yellow-100 text-yellow-700";
    case "approved":
      return "bg-blue-100 text-blue-700";
    case "in progress":
      return "bg-orange-100 text-orange-700";
    case "ongoing":
      return "bg-purple-100 text-purple-700";
    case "rejected":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function PayrollDetails() {
  const [search, setSearch] = useState("");
  const [selectedTime, setSelectedTime] = useState("today");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null)

  const filteredData = useMemo(() => {
    return tableData.filter((row) => {
      const matchesSearch =
        row.tripid.toLowerCase().includes(search.toLowerCase()) ||
        row.customerName.toLowerCase().includes(search.toLowerCase()) ||
        driverNames.some((name) => name.includes(search.toLowerCase()));

      const rowStatus = row.tripstatus.toLowerCase().replace(/\s+/g, "_");
      const filterStatus = selectedStatus.toLowerCase();
      const matchesStatus = filterStatus === "all" || rowStatus === filterStatus;

      const rowDate = new Date(row.dateTime);
      const today = new Date();

      let matchesTime = true;
      if (selectedTime === "today") {
        matchesTime =
          rowDate.toDateString() === today.toDateString();
      } else if (selectedTime === "this_week") {
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        matchesTime = rowDate >= weekStart && rowDate <= weekEnd;
      } else if (selectedTime === "this_month") {
        matchesTime =
          rowDate.getMonth() === today.getMonth() &&
          rowDate.getFullYear() === today.getFullYear();
      }

      return matchesSearch && matchesStatus && matchesTime;
    });
  }, [search, selectedStatus, selectedTime]);


  //  table columns
  const columns = [
    { key: "no", header: "No." },
    { key: "tripid", header: "Trip ID" },
    { key: "dateTime", header: "Date & Time" },
    {
      key: "assignedDriver",
      header: "Assigned Driver",
      render: (row) => (
        <div className="flex items-center gap-2">
          <img src="/jpg/image.png" className="w-8 h-8" />
          <p>{row.assignedDriver}</p>
        </div>
      ),
    },
    { key: "hours", header: "Hours (Base/OT)" },
    { key: "driverRate", header: "Driver Rate" },
    {
      key: "basepay",
      header: "Base Pay",
      render: (row) => (
        <span
          className={``}
        >
          {row.basepay}
        </span>
      ),
    },

    { key: "gratuity", header: "Gratuity" },

    {
      key: "reimbursables",
      header: "Reimbursables",
      render: (row) => (
        <span>
          {row.reimbursables}
        </span>
      ),
    },

    {
      key: "deductions",
      header: "Deductions",
      render: (row) => (
        <span
          className={`text-red-500`}
        >
          {row.deductions}
        </span>
      ),
    },

    {
      key: "nettrippay",
      header: "Net Trip Pay",
      render: (row) => (
        <div className="">
          <p>{row.nettrippay}</p>
        </div>
      ),
    },
    {
      key: "tripstatus",
      header: "Trip Status",
      render: (row) => (
        <span
          className={`px-2.5 py-1.5 rounded-[6px] ${getStatusColor(
            row.tripstatus
          )}`}
        >
          {row.tripstatus}
        </span>
      ),
    },
    {
      key: "payrollstatus",
      header: "Payroll Status",
      render: (row) => (
        <span
          className={`px-2.5 py-1.5 rounded-[6px] ${getStatusColor(
            row.payrollstatus
          )}`}
        >
          {row.payrollstatus}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-[6px] bg-blue-50 cursor-pointer`}
        >
          <img src={"/png/eye.png"} className="w-5" />
        </div>
      ),
    },
  ];
  return (
    <div className="bg-white p-4 rounded-xl">
      <FilterBar
        timeFilters={timeFilters}
        statuses={statuses}
        showVehicle={false}
        showTimeFilter={true}
        search={search}
        setSearch={setSearch}
        onSearch={() => { }}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <Table
        data={filteredData}
        columns={columns}
        isRecent={false}
        isSuperAdmin={true}
        addBtn="Add Ride"
        icon={<FaPlus />}
      />

      <CustomModal
        isOpen={!!selectedRow}
        onRequestClose={() => setSelectedRow(null)}
        title="Detail"
      >
        {selectedRow && (
          <TripInformationDialog row={selectedRow} onClose={() => setSelectedRow(null)} />
        )}

      </CustomModal>

    </div>
  )
}
