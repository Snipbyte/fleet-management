"use client";
import React, { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import FilterBar from "../../../common/filterbar/filterbar";
import Table from "../../../common/table/table";
import CustomModal from "../../../common/modal/modal";
import AddDriver from "../addDriver/addDriver"
import { getStatusColor } from "../../../../../../utils/services";

const drivers = [
  {
    no: 1,
    driverId: "DRV101",
    name: "Ali Raza",
    email: "ali.raza@example.com",
    phone: "+92 300 1234567",
    vehicle: "Toyota Corolla",
    license: "LIC12345",
    totalRides: 120,
    status: "Active",
  },
  {
    no: 2,
    driverId: "DRV102",
    name: "Sarah Khan",
    email: "sarah.khan@example.com",
    phone: "+92 322 9876543",
    vehicle: "Honda Civic",
    license: "LIC98765",
    totalRides: 85,
    status: "Inactive",
  },
  {
    no: 3,
    driverId: "DRV103",
    name: "Michael Smith",
    email: "m.smith@example.com",
    phone: "+92 345 5554321",
    vehicle: "Suzuki Alto",
    license: "LIC56789",
    totalRides: 60,
    status: "Active",
  },
];

const timeFilters = ["Last 30 Days", "Last 7 Days", "All"];
const statuses = ["All", "Active", "Inactive"];

export default function AssignDriverTable() {
  const [search, setSearch] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(drivers);

  const handleSearch = () => {
    const lower = search.toLowerCase();
    const results = drivers.filter(
      (row) =>
        row.driverId.toLowerCase().includes(lower) ||
        row.name.toLowerCase().includes(lower) ||
        row.email.toLowerCase().includes(lower)
    );
    setFilteredData(results);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // Columns for Driver Table
  const columns = [
    { key: "no", header: "No." },
    { key: "driverId", header: "Driver Id" },
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "phone", header: "Phone Number" },
    { key: "vehicle", header: "Vehicle" },
    { key: "license", header: "License" },
    { key: "totalRides", header: "Total Rides" },
    {
      key: "status",
      header: "Status",
      render: (row) => {
        const statusClass = getStatusColor(row.status);
        return (
          <span className={`px-2.5 py-1.5 rounded-[6px] ${statusClass}`}>
            {row.status}
          </span>
        );
      },
    },
    {
      key: "action",
      header: "Action",
      render: (row) => (
        <div className="flex items-center gap-2 relative">
          <div
            onClick={() => { }}
            className="bg-inputBg px-3 py-2 gap-2 rounded-lg flex items-center justify-center cursor-pointer"
          >
            <FaUserPlus className="text-gray-700 w-4 h-4" />
            <p>
              {row.status === "Active" ? "Re Assign Driver" : "Assign Driver"}
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 py-4">
      <h1 className="text-lg font-semibold">Assign Driver</h1>
      <div className="bg-white rounded-lg p-4 mt-2">
        <FilterBar
          timeFilters={timeFilters}
          statuses={statuses}
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
          showVehicle={false}
          buttonTitle={"Add New Driver"}
          onClick={() => setDialogVisible(true)}
          showButton={true}
        />
        <Table
          data={filteredData}
          columns={columns}
          isRecent={false}
          isSuperAdmin={true}
          addBtn="Add Driver"
          icon={<FaUserPlus />}
        />
        <CustomModal
          isOpen={!!dialogVisible}
          onRequestClose={() => setDialogVisible(null)}
          title="Add New Driver"
        >
          {dialogVisible && (
            <AddDriver onSave={() => { }} />
          )}
        </CustomModal>
      </div>
    </div>
  );
}
