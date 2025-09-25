// components/DriversTable.jsx
"use client"
import React, { useState } from 'react'
import FilterBar from '../../../common/filterbar/filterbar'
import Table from '../../../common/table/table'
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { getStatusColor } from '../../../../../utils/services';
import AdminHeader from '../../../common/adminHeader/adminHeader';
import Button from '../../../common/button/button';
import DriverFormModal from '../driverFormModal/driverFormModal';
import DeleteConfirmationModal from '../deleteConfirmationModal/deleteConfirmationModal';

const data = [
    {
        no: 1,
        driverId: "123",
        name: "Ali Khan",
        email: "ali.khan@example.com",
        phoneNumber: "+92 300 1234567",
        vehicle: "Kia Telluride",
        license: "328-23-473",
        totalRides: "321 Rides",
        status: "Active",
    },
    {
        no: 2,
        driverId: "332",
        name: "Sara Ali",
        email: "sara.ali@example.com",
        phoneNumber: "+92 321 9876543",
        vehicle: "Honda CR-V",
        license: "429-34-584",
        totalRides: "150 Rides",
        status: "Inactive",
    },
    {
        no: 3,
        driverId: "532",
        name: "Usman Malik",
        email: "usman.malik@example.com",
        phoneNumber: "+92 333 4567890",
        vehicle: "Kia Telluride",
        license: "530-45-695",
        totalRides: "200 Rides",
        status: "Active",
    },
    {
        no: 4,
        driverId: "234",
        name: "Bilal Ahmed",
        email: "bilal.ahmed@example.com",
        phoneNumber: "+92 345 6789012",
        vehicle: "Honda CR-V",
        license: "631-56-706",
        totalRides: "120 Rides",
        status: "Active",
    },
    {
        no: 5,
        driverId: "435",
        name: "Imran Shah",
        email: "imran.shah@example.com",
        phoneNumber: "+92 300 5556667",
        vehicle: "Kia Telluride",
        license: "732-67-817",
        totalRides: "180 Rides",
        status: "Inactive",
    },
    {
        no: 6,
        driverId: "636",
        name: "Fatima Zahra",
        email: "fatima.zahra@example.com",
        phoneNumber: "+92 311 4445556",
        vehicle: "Honda CR-V",
        license: "833-78-928",
        totalRides: "90 Rides",
        status: "Active",
    },
    {
        no: 7,
        driverId: "737",
        name: "Hassan Khan",
        email: "hassan.khan@example.com",
        phoneNumber: "+92 322 6667778",
        vehicle: "Kia Telluride",
        license: "934-89-039",
        totalRides: "250 Rides",
        status: "Inactive",
    },
    {
        no: 8,
        driverId: "838",
        name: "Ayesha Noor",
        email: "ayesha.noor@example.com",
        phoneNumber: "+92 333 8889990",
        vehicle: "Honda CR-V",
        license: "135-90-140",
        totalRides: "110 Rides",
        status: "Active",
    },
    {
        no: 9,
        driverId: "939",
        name: "Zara Khan",
        email: "zara.khan@example.com",
        phoneNumber: "+92 344 1112223",
        vehicle: "Kia Telluride",
        license: "236-01-251",
        totalRides: "300 Rides",
        status: "Active",
    },
    {
        no: 10,
        driverId: "140",
        name: "Omar Farooq",
        email: "omar.farooq@example.com",
        phoneNumber: "+92 355 3334445",
        vehicle: "Honda CR-V",
        license: "337-12-362",
        totalRides: "170 Rides",
        status: "Inactive",
    },
    {
        no: 11,
        driverId: "341",
        name: "Sana Malik",
        email: "sana.malik@example.com",
        phoneNumber: "+92 366 5556667",
        vehicle: "Kia Telluride",
        license: "438-23-473",
        totalRides: "130 Rides",
        status: "Active",
    },
    {
        no: 12,
        driverId: "542",
        name: "Rizwan Ahmed",
        email: "rizwan.ahmed@example.com",
        phoneNumber: "+92 377 7778889",
        vehicle: "Honda CR-V",
        license: "539-34-584",
        totalRides: "220 Rides",
        status: "Inactive",
    },
    {
        no: 13,
        driverId: "743",
        name: "Nadia Ali",
        email: "nadia.ali@example.com",
        phoneNumber: "+92 388 9990001",
        vehicle: "Kia Telluride",
        license: "640-45-695",
        totalRides: "190 Rides",
        status: "Active",
    },
    {
        no: 14,
        driverId: "944",
        name: "Kamran Iqbal",
        email: "kamran.iqbal@example.com",
        phoneNumber: "+92 399 2223334",
        vehicle: "Honda CR-V",
        license: "741-56-706",
        totalRides: "160 Rides",
        status: "Inactive",
    },
    {
        no: 15,
        driverId: "145",
        name: "Maryam Shah",
        email: "maryam.shah@example.com",
        phoneNumber: "+92 300 4445556",
        vehicle: "Kia Telluride",
        license: "842-67-817",
        totalRides: "210 Rides",
        status: "Active",
    },
];

const statuses = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "inActive", label: "In Active" },
];

// Added vehicles array for completeness
const vehicles = [
    { value: "kia", label: "Kia Telluride" },
    { value: "honda", label: "Honda CR-V" },
];

export default function DriversTable() {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editingDriver, setEditingDriver] = useState(null);

    const handleSearch = () => {
        const lower = search.toLowerCase();
        const results = data.filter((row) =>
            row.driverId.toLowerCase().includes(lower) ||
            row.name.toLowerCase().includes(lower) ||
            row.email.toLowerCase().includes(lower)
        );
        setFilteredData(results);
    };

    const handleAddDriver = () => {
        setEditingDriver(null);
        setIsFormModalOpen(true);
    };

    const handleEditDriver = (row) => {
        setEditingDriver(row);
        setIsFormModalOpen(true);
    };

    const handleDeleteDriver = (row) => {
        setEditingDriver(row); // Use editingDriver to pass the row for deletion
        setIsDeleteModalOpen(true);
    };

    const handleSaveDriver = (formData) => {
        if (editingDriver) {
            // Update existing driver
            const updatedData = data.map((driver) =>
                driver.no === editingDriver.no ? { ...driver, ...formData } : driver
            );
            setData(updatedData);
        } else {
            // Add new driver
            const newDriver = {
                no: data.length + 1,
                driverId: Math.floor(Math.random() * 1000).toString(),
                ...formData,
                totalRides: "0 Rides",
            };
            setData([...data, newDriver]);
        }
    };

    const handleDeleteConfirm = () => {
        if (editingDriver) {
            const updatedData = data.filter((driver) => driver.no !== editingDriver.no);
            setData(updatedData.map((driver, index) => ({ ...driver, no: index + 1 })));
            setEditingDriver(null);
        }
        setIsDeleteModalOpen(false);
    };

    // Custom setData function to update state
    const setData = (newData) => {
        setFilteredData(newData);
        // Here you would typically update your actual data source (e.g., API or state management)
    };

    // Define columns
    const columns = [
        { key: "no", header: "No", className: "w-16" },
        { key: "driverId", header: "Driver ID", className: "w-24" },
        {
            key: "name",
            header: "Name",
            render: (row) => (
                <div className="flex items-center gap-2">
                    <img src="/images/jpg/image.png" className="w-8 h-8" />
                    <p className="">{row.name}</p>
                </div>
            ),
            className: "w-40",
        },
        { key: "email", header: "Email", className: "w-48" },
        { key: "phoneNumber", header: "Phone Number", className: "w-48" },
        { key: "vehicle", header: "Vehicle", className: "w-40" },
        { key: "license", header: "License", className: "w-40" },
        { key: "totalRides", header: "Total Rides", className: "w-32" },
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
            className: "w-32",
        },
        {
            key: "actions",
            header: "Actions",
            render: (row) => (
                <div className="flex items-center gap-2">
                    <div
                        onClick={() => handleEditDriver(row)}
                        className="bg-green-50 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer"
                    >
                        <GoPencil className="w-4 h-4 text-green-600" />
                    </div>
                    <div
                        onClick={() => handleDeleteDriver(row)}
                        className="bg-red-50 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer"
                    >
                        <RiDeleteBin6Line className="w-4 h-4 text-red-600" />
                    </div>
                </div>
            ),
            className: "w-32",
        },
    ];

    return (
        <div className="bg-gray-50">
            <div className="flex items-center justify-between mb-6">
                <AdminHeader title="Drivers" />
                <Button
                    onClick={handleAddDriver}
                    className="px-3 py-2 rounded-md text-nowrap"
                >
                    Add Driver
                </Button>
            </div>
            <div className="bg-white rounded-lg p-4 mt-2">
                <FilterBar
                    statuses={statuses}
                    vehicles={vehicles} // Added vehicles prop
                    search={search}
                    setSearch={setSearch}
                    onSearch={handleSearch}
                    showVehicle={false}
                    showTimeFilter={false} // Explicitly enable time filter
                />
                <Table
                    data={filteredData}
                    columns={columns}
                    isRecent={false}
                    isSuperAdmin={true}
                    className="table-auto w-full border-collapse"
                />
                <DriverFormModal
                    isOpen={isFormModalOpen}
                    onRequestClose={() => setIsFormModalOpen(false)}
                    onSave={handleSaveDriver}
                    initialData={editingDriver}
                />
                <DeleteConfirmationModal
                    isOpen={isDeleteModalOpen}
                    onRequestClose={() => setIsDeleteModalOpen(false)}
                    onDelete={handleDeleteConfirm}
                    driverName={editingDriver?.name}
                />
            </div>
        </div>
    );
}