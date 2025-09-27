"use client";
import React, { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import FilterBar from "../../../common/filterbar/filterbar";
import Table from "../../../common/table/table";
import CustomModal from "../../../common/modal/modal";
import DisputeDetails from "../disputeDetails/disputeDetails";
import { highlightText } from "../../../../../../utils/services";

const timeFilters = [
  { label: "Last 30 Days", value: "last 30 days" },
  { label: "Last 7 Days", value: "last 7 days" },
  { label: "All", value: "all" },
];

const statuses = [
  { label: "All Status", value: "all" },
  { label: "Open", value: "open" },
  { label: "Resolved", value: "resolved" },
];

const tableData = [
  {
    no: 1,
    ticketId: "TRIP-1001",
    type: "Period",
    customerName: "Tommi Jenkins",
    assignedDriver: "John Smith",
    category: "Missing Reimbursables",
    submitted: "Oct 12, 2024",
    status: "open",
    description: "Hi John, fare changed to $1200 for booking at 1 ...",
    actions: "",
  },
  {
    no: 2,
    ticketId: "TRIP-1001",
    type: "Period",
    customerName: "Tommi Jenkins",
    assignedDriver: "John Smith",
    category: "Missing Reimbursables",
    submitted: "Oct 12, 2024",
    status: "resolved",
    description: "Hi John, fare changed to $1200 for booking at 1 ...",
    actions: "",
  },
];



function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case "resolved":
      return "bg-green-100 text-green-700";
    case "open":
      return "bg-orange-100 text-orange-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function Dispute() {
  const [search, setSearch] = useState("");
  const [selectedTime, setSelectedTime] = useState("today");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null)

  //  table columns
  const columns = [
    { key: "no", header: "No." },
    { key: "ticketId", header: "Ticket ID" },
    { key: "type", header: "Type" },
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
    { key: "category", header: "Category" },
    { key: "submitted", header: "Submitted On" },
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
    { key: "description", header: "Description" },
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
            className="bg-blue-50 w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer"
          >
            <img
              src="/images/png/eye.png"
              className="w-4 h-4 object-contain"
            />
          </div>
          <div
            onClick={(e) => {
            }}
            className="bg-red-50 w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer"
          >
            <img
              src="/images/png/bin.png"
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
          <DisputeDetails row={selectedRow} onClose={() => setSelectedRow(null)} />
        )}

      </CustomModal>
    </div>
  );
}
