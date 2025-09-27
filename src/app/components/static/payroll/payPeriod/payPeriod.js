"use client";
import React, { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import FilterBar from "../../../common/filterbar/filterbar";
import Table from "../../../common/table/table";
import CustomModal from "../../../common/modal/modal";
import TripInformationDialog from "../tripInformationDialog/tripInformationDialog";
import { getStatusColor, highlightText } from "../../../../../../utils/services";



const timeFilters = [
  { label: "Last 30 Days", value: "last 30 days" },
  { label: "Last 7 Days", value: "last 7 days" },
  { label: "All", value: "all" },
];

const statuses = [
  { label: "All Status", value: "all" },
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
    customerName: "John Doe",
    dateTime: "2025-09-21 10:30 AM",
    pickupLocation: "Johar Town, Lahore",
    dropoffLocation: "Model Town, Lahore",
    assignedDriver: "Ali Khan",
    status: "Completed",
    total: "Rs 2,500",
    paymentStatus: "Paid",
    payoutStatus: "Processed",
  },
  {
    no: 2,
    tripid: "TRIP-1002",
    customerName: "Sarah Ahmed",
    dateTime: "2025-09-20 11:15 AM",
    pickupLocation: "DHA Phase 5, Lahore",
    dropoffLocation: "Bahria Town, Lahore",
    assignedDriver: "Ahmed Raza",
    status: "Pending",
    total: "Rs 3,200",
    paymentStatus: "Unpaid",
    payoutStatus: "Pending",
  },
  {
    no: 3,
    tripid: "TRIP-1003",
    customerName: "Bilal Aslam",
    dateTime: "2025-09-19 09:45 AM",
    pickupLocation: "Liberty Market, Lahore",
    dropoffLocation: "Airport, Lahore",
    assignedDriver: "Zeeshan Malik",
    status: "In Progress",
    total: "Rs 4,800",
    paymentStatus: "Paid",
    payoutStatus: "Success",
  },
  {
    no: 4,
    tripid: "TRIP-1004",
    customerName: "Fatima Noor",
    dateTime: "2025-09-18 08:20 AM",
    pickupLocation: "Mall Road, Lahore",
    dropoffLocation: "Ferozepur Road, Lahore",
    assignedDriver: "Usman Tariq",
    status: "Rejected",
    total: "Rs 1,900",
    paymentStatus: "Unpaid",
    payoutStatus: "Ongoing",
  },
  {
    no: 1,
    tripid: "TRIP-1001",
    customerName: "John Doe",
    dateTime: "2025-09-21 10:30 AM",
    pickupLocation: "Johar Town, Lahore",
    dropoffLocation: "Model Town, Lahore",
    assignedDriver: "Ali Khan",
    status: "Completed",
    total: "Rs 2,500",
    paymentStatus: "Paid",
    payoutStatus: "Processed",
  },
  {
    no: 2,
    tripid: "TRIP-1002",
    customerName: "Sarah Ahmed",
    dateTime: "2025-09-20 11:15 AM",
    pickupLocation: "DHA Phase 5, Lahore",
    dropoffLocation: "Bahria Town, Lahore",
    assignedDriver: "Ahmed Raza",
    status: "Pending",
    total: "Rs 3,200",
    paymentStatus: "Unpaid",
    payoutStatus: "Pending",
  },
  {
    no: 3,
    tripid: "TRIP-1003",
    customerName: "Bilal Aslam",
    dateTime: "2025-09-19 09:45 AM",
    pickupLocation: "Liberty Market, Lahore",
    dropoffLocation: "Airport, Lahore",
    assignedDriver: "Zeeshan Malik",
    status: "In Progress",
    total: "Rs 4,800",
    paymentStatus: "Paid",
    payoutStatus: "Success",
  },
  {
    no: 4,
    tripid: "TRIP-1004",
    customerName: "Fatima Noor",
    dateTime: "2025-09-18 08:20 AM",
    pickupLocation: "Mall Road, Lahore",
    dropoffLocation: "Ferozepur Road, Lahore",
    assignedDriver: "Usman Tariq",
    status: "Rejected",
    total: "Rs 1,900",
    paymentStatus: "Unpaid",
    payoutStatus: "Ongoing",
  },
  {
    no: 1,
    tripid: "TRIP-1001",
    customerName: "John Doe",
    dateTime: "2025-09-21 10:30 AM",
    pickupLocation: "Johar Town, Lahore",
    dropoffLocation: "Model Town, Lahore",
    assignedDriver: "Ali Khan",
    status: "Completed",
    total: "Rs 2,500",
    paymentStatus: "Paid",
    payoutStatus: "Processed",
  },
  {
    no: 2,
    tripid: "TRIP-1002",
    customerName: "Sarah Ahmed",
    dateTime: "2025-09-20 11:15 AM",
    pickupLocation: "DHA Phase 5, Lahore",
    dropoffLocation: "Bahria Town, Lahore",
    assignedDriver: "Ahmed Raza",
    status: "Pending",
    total: "Rs 3,200",
    paymentStatus: "Unpaid",
    payoutStatus: "Pending",
  },
  {
    no: 3,
    tripid: "TRIP-1003",
    customerName: "Bilal Aslam",
    dateTime: "2025-09-19 09:45 AM",
    pickupLocation: "Liberty Market, Lahore",
    dropoffLocation: "Airport, Lahore",
    assignedDriver: "Zeeshan Malik",
    status: "In Progress",
    total: "Rs 4,800",
    paymentStatus: "Paid",
    payoutStatus: "Success",
  },
  {
    no: 4,
    tripid: "TRIP-1004",
    customerName: "Fatima Noor",
    dateTime: "2025-09-18 08:20 AM",
    pickupLocation: "Mall Road, Lahore",
    dropoffLocation: "Ferozepur Road, Lahore",
    assignedDriver: "Usman Tariq",
    status: "Rejected",
    total: "Rs 1,900",
    paymentStatus: "Unpaid",
    payoutStatus: "Ongoing",
  },
  {
    no: 1,
    tripid: "TRIP-1001",
    customerName: "John Doe",
    dateTime: "2025-09-21 10:30 AM",
    pickupLocation: "Johar Town, Lahore",
    dropoffLocation: "Model Town, Lahore",
    assignedDriver: "Ali Khan",
    status: "Completed",
    total: "Rs 2,500",
    paymentStatus: "Paid",
    payoutStatus: "Processed",
  },
  {
    no: 2,
    tripid: "TRIP-1002",
    customerName: "Sarah Ahmed",
    dateTime: "2025-09-20 11:15 AM",
    pickupLocation: "DHA Phase 5, Lahore",
    dropoffLocation: "Bahria Town, Lahore",
    assignedDriver: "Ahmed Raza",
    status: "Pending",
    total: "Rs 3,200",
    paymentStatus: "Unpaid",
    payoutStatus: "Pending",
  },
  {
    no: 3,
    tripid: "TRIP-1003",
    customerName: "Bilal Aslam",
    dateTime: "2025-09-19 09:45 AM",
    pickupLocation: "Liberty Market, Lahore",
    dropoffLocation: "Airport, Lahore",
    assignedDriver: "Zeeshan Malik",
    status: "In Progress",
    total: "Rs 4,800",
    paymentStatus: "Paid",
    payoutStatus: "Success",
  },
  {
    no: 4,
    tripid: "TRIP-1004",
    customerName: "Fatima Noor",
    dateTime: "2025-09-18 08:20 AM",
    pickupLocation: "Mall Road, Lahore",
    dropoffLocation: "Ferozepur Road, Lahore",
    assignedDriver: "Usman Tariq",
    status: "Rejected",
    total: "Rs 1,900",
    paymentStatus: "Unpaid",
    payoutStatus: "Ongoing",
  },
];

export default function PayPeriod() {
  const [search, setSearch] = useState("");
  const [selectedTime, setSelectedTime] = useState("today");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null)

  //  table columns
  const columns = [
    { key: "no", header: "No." },
    { key: "tripid", header: "Trip ID" },

    {
      key: "customerName",
      header: "Customer Name",
      render: (row) => (
        <div className="flex items-center gap-2">
          <img src="/images/jpg/image.png" className="w-8 h-8" />
          <p>{highlightText(row.customerName, search)}</p>
        </div>
      ),
    },

    { key: "dateTime", header: "Date & Time" },
    { key: "pickupLocation", header: "Pickup Location" },
    { key: "dropoffLocation", header: "Dropoff Location" },

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

    {
      key: "status",
      header: "Trip Status",
      render: (row) => (
        <span
          className={`px-2.5 py-1.5 rounded-[6px] ${getStatusColor(
            row.status
          )}`}
        >
          {row.status}
        </span>
      ),
    },

    { key: "total", header: "Total Revenue" },

    {
      key: "paymentStatus",
      header: "Driver Status",
      render: (row) => (
        <span
          className={`px-2.5 py-1.5 rounded-[6px] ${getStatusColor(
            row.paymentStatus
          )}`}
        >
          {row.paymentStatus}
        </span>
      ),
    },

    {
      key: "payoutStatus",
      header: "Payroll Status",
      render: (row) => (
        <span
          className={`px-2.5 py-1.5 rounded-[6px] ${getStatusColor(
            row.payoutStatus
          )}`}
        >
          {row.payoutStatus}
        </span>
      ),
    },

    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2 relative">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdown(openDropdown === row.no ? null : row.no);
              setSelectedRow(row)
            }}
            className="bg-blue-50 px-2.5 py-2.5 rounded-lg flex items-center justify-center cursor-pointer"
          >
            <img
              src="/images/png/eye.png"
              className="w-4 h-4 object-contain"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl">
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
  );
}
