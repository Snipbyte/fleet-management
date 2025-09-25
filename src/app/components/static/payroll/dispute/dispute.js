"use client";
import React, { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import FilterBar from "../../../common/filterbar/filterbar";
import Table from "../../../common/table/table";
import CustomModal from "../../../common/modal/modal";
import DisputeDetails from "../disputeDetails/disputeDetails";


// ✅ Time Filters
const timeFilters = [
 { label: "Last 30 Days", value: "last 30 days" },
  { label: "Last 7 Days", value: "last 7 days" },
  { label: "All", value: "all" },
];

// ✅ Status Filters (updated)
const statuses = [
  { label: "All Status", value: "all" },
  { label: "Open", value: "open" },
  { label: "Resolved", value: "resolved" },
];

// ✅ Dummy Table Data
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

  const filteredData = useMemo(() => {
    return tableData.filter((row) => {

      const driverNames = Array.isArray(row.assignedDriver)
        ? row.assignedDriver.map((d) => d.name.toLowerCase())
        : [String(row.assignedDriver || "").toLowerCase()];

      const matchesSearch =
        row.ticketId.toLowerCase().includes(search.toLowerCase()) ||
        row.customerName.toLowerCase().includes(search.toLowerCase()) ||
        driverNames.some((name) => name.includes(search.toLowerCase()));

      const rowStatus = row.status.toLowerCase().replace(/\s+/g, "_");
      const filterStatus = selectedStatus.toLowerCase();
      const matchesStatus = filterStatus === "all" || rowStatus === filterStatus;

      const rowDate = new Date(row.submitted);
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
