"use client";
import React, { useState } from 'react';
import FilterBar from '../../../common/filterbar/filterbar';
import Table from '../../../common/table/table';
import { AiOutlineEye } from "react-icons/ai";
import { getStatusColor } from '../../../../../utils/services';
import AdminHeader from '../../../common/adminHeader/adminHeader';
import PaymentViewModal from '../paymentViewModal/paymentViewModal';
import RequestPaymentModal from '../requestPaymentModal/requestPaymentModal';

// Sample payment data
const data = [
    {
        no: 1,
        paymentId: "P123",
        bookingId: "B001",
        pickupLocation: "Karachi Airport",
        dropoffLocation: "Clifton, Karachi",
        customerName: "Ali Khan",
        fareAmount: "$50.00",
        addOns: "$5.00",
        totalAmount: "$55.00",
        paymentMethod: "Credit Card",
        payoutDate: "2023-01-20",
        paymentStatus: "Pending",
    },
    {
        no: 2,
        paymentId: "P332",
        bookingId: "B002",
        pickupLocation: "Lahore Railway Station",
        dropoffLocation: "Gulberg, Lahore",
        customerName: "Sara Ali",
        fareAmount: "$30.00",
        addOns: "$0.00",
        totalAmount: "$30.00",
        paymentMethod: "Cash",
        payoutDate: "2023-03-25",
        paymentStatus: "Paid",
    },
    {
        no: 3,
        paymentId: "P532",
        bookingId: "B003",
        pickupLocation: "Islamabad Airport",
        dropoffLocation: "F-7, Islamabad",
        customerName: "Usman Malik",
        fareAmount: "$70.00",
        addOns: "$10.00",
        totalAmount: "$80.00",
        paymentMethod: "UPI",
        payoutDate: "2023-07-15",
        paymentStatus: "In Progress",
    },
    {
        no: 4,
        paymentId: "P214",
        bookingId: "B004",
        pickupLocation: "Multan Cantt",
        dropoffLocation: "Bosan Road, Multan",
        customerName: "Fatima Ahmed",
        fareAmount: "$20.00",
        addOns: "$3.00",
        totalAmount: "$23.00",
        paymentMethod: "Credit Card",
        payoutDate: "2023-04-10",
        paymentStatus: "Rejected",
    },
    {
        no: 5,
        paymentId: "P645",
        bookingId: "B005",
        pickupLocation: "Rawalpindi Saddar",
        dropoffLocation: "Bahria Town, Rawalpindi",
        customerName: "Hassan Iqbal",
        fareAmount: "$45.00",
        addOns: "$5.00",
        totalAmount: "$50.00",
        paymentMethod: "Cash",
        payoutDate: "2023-06-17",
        paymentStatus: "Approved",
    },
    {
        no: 6,
        paymentId: "P789",
        bookingId: "B006",
        pickupLocation: "Faisalabad Clock Tower",
        dropoffLocation: "Samanabad, Faisalabad",
        customerName: "Ayesha Siddiqui",
        fareAmount: "$25.00",
        addOns: "$0.00",
        totalAmount: "$25.00",
        paymentMethod: "UPI",
        payoutDate: "2023-09-23",
        paymentStatus: "Pending",
    },
    {
        no: 7,
        paymentId: "P890",
        bookingId: "B007",
        pickupLocation: "Peshawar University",
        dropoffLocation: "University Town, Peshawar",
        customerName: "Omar Farooq",
        fareAmount: "$35.00",
        addOns: "$4.00",
        totalAmount: "$39.00",
        paymentMethod: "Credit Card",
        payoutDate: "2023-03-05",
        paymentStatus: "Paid",
    },
    {
        no: 8,
        paymentId: "P901",
        bookingId: "B008",
        pickupLocation: "Quetta Railway Station",
        dropoffLocation: "Zarghoon Road, Quetta",
        customerName: "Zainab Khan",
        fareAmount: "$15.00",
        addOns: "$2.00",
        totalAmount: "$17.00",
        paymentMethod: "Cash",
        payoutDate: "2023-08-20",
        paymentStatus: "In Progress",
    },
    {
        no: 9,
        paymentId: "P432",
        bookingId: "B009",
        pickupLocation: "Hyderabad Market",
        dropoffLocation: "Latifabad, Hyderabad",
        customerName: "Rehan Ahmed",
        fareAmount: "$60.00",
        addOns: "$8.00",
        totalAmount: "$68.00",
        paymentMethod: "UPI",
        payoutDate: "2023-05-25",
        paymentStatus: "Approved",
    },
    {
        no: 10,
        paymentId: "P567",
        bookingId: "B010",
        pickupLocation: "Sialkot Cantt",
        dropoffLocation: "Defence Road, Sialkot",
        customerName: "Nida Malik",
        fareAmount: "$40.00",
        addOns: "$5.00",
        totalAmount: "$45.00",
        paymentMethod: "Credit Card",
        payoutDate: "2023-10-08",
        paymentStatus: "Rejected",
    },
    {
        no: 11,
        paymentId: "P678",
        bookingId: "B011",
        pickupLocation: "Gujranwala City",
        dropoffLocation: "Satellite Town, Gujranwala",
        customerName: "Bilal Hussain",
        fareAmount: "$22.00",
        addOns: "$0.00",
        totalAmount: "$22.00",
        paymentMethod: "Cash",
        payoutDate: "2023-03-15",
        paymentStatus: "Pending",
    },
    {
        no: 12,
        paymentId: "P788", // Changed from "P789" to avoid duplicate
        bookingId: "B012",
        pickupLocation: "Bahawalpur Airport",
        dropoffLocation: "University Road, Bahawalpur",
        customerName: "Sana Rashid",
        fareAmount: "$55.00",
        addOns: "$6.00",
        totalAmount: "$61.00",
        paymentMethod: "UPI",
        payoutDate: "2023-07-30",
        paymentStatus: "Paid",
    },
    {
        no: 13,
        paymentId: "P910",
        bookingId: "B013",
        pickupLocation: "Sargodha University",
        dropoffLocation: "Satellite Town, Sargodha",
        customerName: "Imran Khan",
        fareAmount: "$28.00",
        addOns: "$3.00",
        totalAmount: "$31.00",
        paymentMethod: "Credit Card",
        payoutDate: "2023-11-17",
        paymentStatus: "In Progress",
    },
    {
        no: 14,
        paymentId: "P111",
        bookingId: "B014",
        pickupLocation: "Rahim Yar Khan",
        dropoffLocation: "Model Town, Rahim Yar Khan",
        customerName: "Hina Ali",
        fareAmount: "$35.00",
        addOns: "$4.00",
        totalAmount: "$39.00",
        paymentMethod: "Cash",
        payoutDate: "2023-05-05",
        paymentStatus: "Approved",
    },
    {
        no: 15,
        paymentId: "P222",
        bookingId: "B015",
        pickupLocation: "Dera Ghazi Khan",
        dropoffLocation: "Jampur Road, Dera Ghazi Khan",
        customerName: "Yousuf Shah",
        fareAmount: "$45.00",
        addOns: "$5.00",
        totalAmount: "$50.00",
        paymentMethod: "UPI",
        payoutDate: "2023-08-13",
        paymentStatus: "Rejected",
    },
];

// Updated timeFilters to use correct object format
const timeFilters = [
    { value: "last30Days", label: "Last 30 Days" },
    { value: "last7Days", label: "Last 7 Days" },
    { value: "all", label: "All" },
];

// Updated paymentStatuses to match data and use correct object format
const paymentStatuses = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "inActive", label: "In Active" },
];

// Added vehicles array for completeness
const vehicles = [
    { value: "none", label: "None" }, // Placeholder since vehicles are not relevant for payments
];

export default function PaymentTable() {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const handleSearch = () => {
        const lower = search.toLowerCase();
        const results = data.filter((row) =>
            row.paymentId.toLowerCase().includes(lower) ||
            row.bookingId.toLowerCase().includes(lower) ||
            row.customerName.toLowerCase().includes(lower)
        );
        setFilteredData(results);
    };

    const handleViewPayment = (row) => {
        setSelectedPayment(row);
        setIsViewModalOpen(true);
    };

    const handleRequestPayment = (row) => {
        setSelectedPayment(row);
        setIsRequestModalOpen(true);
    };

    const columns = [
        { key: "no", header: "No", className: "w-12" },
        { key: "paymentId", header: "Payment ID", className: "w-24" },
        { key: "bookingId", header: "Booking ID", className: "w-24" },
        { key: "pickupLocation", header: "Pickup Location", className: "w-40" },
        { key: "dropoffLocation", header: "Dropoff Location", className: "w-40" },
        { key: "customerName", header: "Customer Name", className: "w-32" },
        { key: "fareAmount", header: "Fare Amount", className: "w-24" },
        { key: "addOns", header: "Add-ons", className: "w-24" },
        { key: "totalAmount", header: "Total Amount", className: "w-24" },
        { key: "paymentMethod", header: "Payment Method", className: "w-28" },
        { key: "payoutDate", header: "Payout Date", className: "w-28" },
        {
            key: "paymentStatus",
            header: "Payment Status",
            render: (row) => {
                const statusClass = getStatusColor(row.paymentStatus);
                return (
                    <span className={`px-2.5 py-1.5 rounded-[6px] ${statusClass}`}>
                        {row.paymentStatus}
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
                    <div className="bg-blue-50 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer" onClick={() => handleViewPayment(row)}>
                        <AiOutlineEye className="w-4 h-4 text-blue-600" />
                    </div>
                    <button className="px-2 py-1 bg-gray-100 text-black hover:bg-gray-200 duration-300 text-xs rounded-md" onClick={() => handleRequestPayment(row)}>
                        Request Payment
                    </button>
                </div>
            ),
            className: "w-40",
        },
    ];

    return (
        <div className="bg-gray-50">
            <div className="flex items-center justify-between mb-6">
                <AdminHeader title="Payments" />
            </div>
            <div className="bg-white rounded-lg p-4 mt-2">
                <FilterBar
                    timeFilters={timeFilters}
                    statuses={paymentStatuses}
                    vehicles={vehicles}
                    search={search}
                    setSearch={setSearch}
                    onSearch={handleSearch}
                    showVehicle={false}
                    showTimeFilter={true} // Show Time Filter
                />
                <Table
                    data={filteredData}
                    columns={columns}
                    isRecent={false}
                    isSuperAdmin={true}
                    className="table-auto w-full border-collapse"
                />
                <PaymentViewModal
                    isOpen={isViewModalOpen}
                    onRequestClose={() => setIsViewModalOpen(false)}
                    payment={selectedPayment}
                />
                <RequestPaymentModal
                    isOpen={isRequestModalOpen}
                    onRequestClose={() => setIsRequestModalOpen(false)}
                    payment={selectedPayment}
                />
            </div>
        </div>
    );
}