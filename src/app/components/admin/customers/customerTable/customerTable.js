"use client";
import React, { useState } from 'react';
import FilterBar from '../../../common/filterbar/filterbar';
import Table from '../../../common/table/table';
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { getStatusColor } from '../../../../../utils/services';
import AdminHeader from '../../../common/adminHeader/adminHeader';
import Button from '../../../common/button/button';
import CustomerViewModal from '../customerViewModal/customerViewModal';
import CustomerFormModal from '../customerFormModal/customerFormModal';
import DeleteConfirmationModal from '../deleteConfirmationModal/deleteConfirmationModal';

// Sample customer data
const data = [
    {
        no: 1,
        customerId: "C123",
        name: "Ali Khan",
        email: "ali.khan@example.com",
        phoneNumber: "+92 300 1234567",
        totalBookings: "12 Bookings",
        joinDate: "2023-01-15",
        status: "Active",
        address: "123 Main St, Karachi, PK",
    },
    {
        no: 2,
        customerId: "C332",
        name: "Sara Ali",
        email: "sara.ali@example.com",
        phoneNumber: "+92 321 9876543",
        totalBookings: "8 Bookings",
        joinDate: "2023-03-22",
        status: "Inactive",
        address: "456 Elm St, Lahore, PK",
    },
    {
        no: 3,
        customerId: "C532",
        name: "Usman Malik",
        email: "usman.malik@example.com",
        phoneNumber: "+92 333 4567890",
        totalBookings: "20 Bookings",
        joinDate: "2023-07-10",
        status: "Active",
        address: "789 Oak St, Islamabad, PK",
    },
    {
        no: 4,
        customerId: "C214",
        name: "Fatima Ahmed",
        email: "fatima.ahmed@example.com",
        phoneNumber: "+92 301 6543210",
        totalBookings: "5 Bookings",
        joinDate: "2023-04-05",
        status: "Inactive",
        address: "101 Pine St, Multan, PK",
    },
    {
        no: 5,
        customerId: "C645",
        name: "Hassan Iqbal",
        email: "hassan.iqbal@example.com",
        phoneNumber: "+92 334 7890123",
        totalBookings: "15 Bookings",
        joinDate: "2023-06-12",
        status: "Active",
        address: "234 Cedar St, Rawalpindi, PK",
    },
    {
        no: 6,
        customerId: "C789",
        name: "Ayesha Siddiqui",
        email: "ayesha.siddiqui@example.com",
        phoneNumber: "+92 320 4567891",
        totalBookings: "7 Bookings",
        joinDate: "2023-09-18",
        status: "Inactive",
        address: "567 Birch St, Faisalabad, PK",
    },
    {
        no: 7,
        customerId: "C890",
        name: "Omar Farooq",
        email: "omar.farooq@example.com",
        phoneNumber: "+92 315 1234567",
        totalBookings: "10 Bookings",
        joinDate: "2023-02-28",
        status: "Active",
        address: "890 Maple St, Peshawar, PK",
    },
    {
        no: 8,
        customerId: "C901",
        name: "Zainab Khan",
        email: "zainab.khan@example.com",
        phoneNumber: "+92 322 9876543",
        totalBookings: "3 Bookings",
        joinDate: "2023-08-15",
        status: "Inactive",
        address: "321 Oakwood St, Quetta, PK",
    },
    {
        no: 9,
        customerId: "C432",
        name: "Rehan Ahmed",
        email: "rehan.ahmed@example.com",
        phoneNumber: "+92 305 6543210",
        totalBookings: "18 Bookings",
        joinDate: "2023-05-20",
        status: "Active",
        address: "654 Pinewood St, Hyderabad, PK",
    },
    {
        no: 10,
        customerId: "C567",
        name: "Nida Malik",
        email: "nida.malik@example.com",
        phoneNumber: "+92 331 7890123",
        totalBookings: "9 Bookings",
        joinDate: "2023-10-03",
        status: "Active",
        address: "987 Elmwood St, Sialkot, PK",
    },
    {
        no: 11,
        customerId: "C678",
        name: "Bilal Hussain",
        email: "bilal.hussain@example.com",
        phoneNumber: "+92 317 4567891",
        totalBookings: "4 Bookings",
        joinDate: "2023-03-10",
        status: "Inactive",
        address: "147 Cedarwood St, Gujranwala, PK",
    },
    {
        no: 12,
        customerId: "C789",
        name: "Sana Rashid",
        email: "sana.rashid@example.com",
        phoneNumber: "+92 309 1234567",
        totalBookings: "14 Bookings",
        joinDate: "2023-07-25",
        status: "Active",
        address: "258 Birchwood St, Bahawalpur, PK",
    },
    {
        no: 13,
        customerId: "C910",
        name: "Imran Khan",
        email: "imran.khan@example.com",
        phoneNumber: "+92 323 9876543",
        totalBookings: "6 Bookings",
        joinDate: "2023-11-12",
        status: "Inactive",
        address: "369 Maplewood St, Sargodha, PK",
    },
    {
        no: 14,
        customerId: "C111",
        name: "Hina Ali",
        email: "hina.ali@example.com",
        phoneNumber: "+92 306 6543210",
        totalBookings: "11 Bookings",
        joinDate: "2023-04-30",
        status: "Active",
        address: "741 Oakwood St, Rahim Yar Khan, PK",
    },
    {
        no: 15,
        customerId: "C222",
        name: "Yousuf Shah",
        email: "yousuf.shah@example.com",
        phoneNumber: "+92 318 7890123",
        totalBookings: "13 Bookings",
        joinDate: "2023-08-08",
        status: "Active",
        address: "852 Pinewood St, Dera Ghazi Khan, PK",
    },
];

const timeFilters = ["Last 30 Days", "Last 7 Days", "All"];
const statuses = ["All Status", "Active", "In Active"];

export default function CustomerTable() {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleSearch = () => {
        const lower = search.toLowerCase();
        const results = data.filter((row) =>
            row.customerId.toLowerCase().includes(lower) ||
            row.name.toLowerCase().includes(lower) ||
            row.email.toLowerCase().includes(lower)
        );
        setFilteredData(results);
    };

    const handleViewCustomer = (row) => {
        setSelectedCustomer(row);
        setIsViewModalOpen(true);
    };

    const handleEditCustomer = (row) => {
        setSelectedCustomer(row);
        setIsFormModalOpen(true);
    };

    const handleAddCustomer = () => {
        setSelectedCustomer(null);
        setIsFormModalOpen(true);
    };

    const handleDeleteCustomer = (row) => {
        setSelectedCustomer(row);
        setIsDeleteModalOpen(true);
    };

    const handleSaveCustomer = (formData) => {
        if (selectedCustomer) {
            const updatedData = data.map((customer) =>
                customer.no === selectedCustomer.no ? { ...customer, ...formData } : customer
            );
            setFilteredData(updatedData);
        } else {
            const newCustomer = {
                no: data.length + 1,
                customerId: `C${Math.floor(Math.random() * 1000)}`,
                ...formData,
                totalBookings: "0 Bookings",
            };
            setFilteredData([...data, newCustomer]);
        }
        setIsFormModalOpen(false);
    };

    const handleDeleteConfirm = () => {
        if (selectedCustomer) {
            const updatedData = data.filter((customer) => customer.no !== selectedCustomer.no);
            setFilteredData(updatedData.map((customer, index) => ({ ...customer, no: index + 1 })));
        }
        setIsDeleteModalOpen(false);
    };

    const columns = [
        { key: "no", header: "No", className: "w-12" },
        { key: "customerId", header: "Customer ID", className: "w-24" },
        {
            key: "name",
            header: "Name",
            render: (row) => (
                <div className="flex items-center gap-2">
                    <img src="/images/jpg/image.png" className="w-8 h-8" alt="profile" />
                    <p>{row.name}</p>
                </div>
            ),
            className: "w-40",
        },
        { key: "email", header: "Email", className: "w-48" },
        { key: "phoneNumber", header: "Phone Number", className: "w-40" },
        { key: "totalBookings", header: "Total Bookings", className: "w-32" },
        { key: "joinDate", header: "Join Date", className: "w-32" },
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
            className: "w-28",
        },
        {
            key: "actions",
            header: "Actions",
            render: (row) => (
                <div className="flex items-center gap-2">
                    <div className="bg-blue-50 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer" onClick={() => handleViewCustomer(row)}>
                        <AiOutlineEye className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="bg-green-50 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer" onClick={() => handleEditCustomer(row)}>
                        <GoPencil className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="bg-red-50 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer" onClick={() => handleDeleteCustomer(row)}>
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
                <AdminHeader title="Customers" />
                <Button onClick={handleAddCustomer} className="px-5 py-2 rounded-md text-nowrap">
                    Add New Customer
                </Button>
            </div>
            <div className="bg-white rounded-lg p-4 mt-2">
                <FilterBar
                    timeFilters={timeFilters}
                    statuses={statuses}
                    search={search}
                    setSearch={setSearch}
                    onSearch={handleSearch}
                    showVehicle={false}
                />
                <Table
                    data={filteredData}
                    columns={columns}
                    isRecent={false}
                    isSuperAdmin={true}
                    className="table-auto w-full border-collapse"
                />
                <CustomerViewModal
                    isOpen={isViewModalOpen}
                    onRequestClose={() => setIsViewModalOpen(false)}
                    customer={selectedCustomer}
                />
                <CustomerFormModal
                    isOpen={isFormModalOpen}
                    onRequestClose={() => setIsFormModalOpen(false)}
                    onSave={handleSaveCustomer}
                    initialData={selectedCustomer}
                />
                <DeleteConfirmationModal
                    isOpen={isDeleteModalOpen}
                    onRequestClose={() => setIsDeleteModalOpen(false)}
                    onDelete={handleDeleteConfirm}
                    customerName={selectedCustomer?.name}
                />
            </div>
        </div>
    );
}