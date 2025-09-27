"use client";
import React, { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import FilterBar from "../../../common/filterbar/filterbar";
import Table from "../../../common/table/table";
import CustomModal from "../../../common/modal/modal";
import TripInformationDialog from "../tripInformationDialog/tripInformationDialog";
import { getStatusColor } from "../../../../../../utils/services";

const timeFilters = [
  { label: "Today", value: "today" },
  { label: "This Week", value: "this_week" },
  { label: "This Month", value: "this_month" },
];

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


export default function PayrollDetails() {
  const [search, setSearch] = useState("");
  const [selectedTime, setSelectedTime] = useState("today");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedRow, setSelectedRow] = useState(null)

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
          <img src="/images/jpg/image.png" className="w-8 h-8" />
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
          onClick={() => setSelectedRow(row)}
          className={`w-8 h-8 flex items-center justify-center rounded-[6px] bg-blue-50 cursor-pointer`}
        >
          <img src={"/images/png/eye.png"} className="w-5" />
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
        data={tableData}
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
