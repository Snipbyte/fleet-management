"use client"
import React, { useState } from 'react'
import FilterBar from '../../common/filterbar/filterbar'
import Table from '../../common/table/table'
import { FaPlus } from 'react-icons/fa';
import BookingDetail from '../../common/bookingDetails/bookingDetails';
import { getStatusColor } from '../../../../utils/services';
import CustomModal from '../../common/modal/modal';
import Link from 'next/link';
import AdminHeader from '../../common/adminHeader/adminHeader';
import AdminHeader from '../../common/adminHeader/adminHeader';

const data = [
  {
    no: 1,
    bookingId: "BKG123",
    customerName: "John Doe",
    dateTime: "2025-09-15 10:00 AM",
    pickupLocation: "Lahore",
    dropoffLocation: "Islamabad",
    vehicleType: "Car",
    addOn: "Child Seat",
    assignedDriver: "Ali Khan",
    total: "$50",
    paymentStatus: "Paid",
    rideStatus: "Completed",
  },
  {
    no: 2,
    bookingId: "BKG124",
    customerName: "Jane Smith",
    dateTime: "2025-09-15 12:00 PM",
    pickupLocation: "Karachi",
    dropoffLocation: "Hyderabad",
    vehicleType: "Bike",
    addOn: "None",
    assignedDriver: "Sara Ali",
    total: "$20",
    paymentStatus: "Pending",
    rideStatus: "In Progress",
  },
  {
    no: 3,
    bookingId: "BKG125",
    customerName: "Ahmed Raza",
    dateTime: "2025-09-15 02:30 PM",
    pickupLocation: "Multan",
    dropoffLocation: "Lahore",
    vehicleType: "Car",
    addOn: "WiFi",
    assignedDriver: "Usman Malik",
    total: "$40",
    paymentStatus: "Rejected",
    rideStatus: "Cancelled",
  },
  {
    no: 4,
    bookingId: "BKG126",
    customerName: "Emily Davis",
    dateTime: "2025-09-15 04:00 PM",
    pickupLocation: "Faisalabad",
    dropoffLocation: "Sargodha",
    vehicleType: "Van",
    addOn: "Extra Luggage",
    assignedDriver: "Bilal Ahmed",
    total: "$70",
    paymentStatus: "Approved",
    rideStatus: "Completed",
  },
  {
    no: 5,
    bookingId: "BKG127",
    customerName: "Hassan Khan",
    dateTime: "2025-09-15 06:00 PM",
    pickupLocation: "Rawalpindi",
    dropoffLocation: "Murree",
    vehicleType: "Car",
    addOn: "Music System",
    assignedDriver: "Imran Shah",
    total: "$55",
    paymentStatus: "Paid",
    rideStatus: "Completed",
  },
  {
    no: 6,
    bookingId: "BKG128",
    customerName: "Sophia Johnson",
    dateTime: "2025-09-15 08:00 PM",
    pickupLocation: "Quetta",
    dropoffLocation: "Karachi",
    vehicleType: "Bus",
    addOn: "Snacks",
    assignedDriver: "Tariq Aziz",
    total: "$100",
    paymentStatus: "Pending",
    rideStatus: "In Progress",
  },
  {
    no: 7,
    bookingId: "BKG129",
    customerName: "Ali Hassan",
    dateTime: "2025-09-16 09:00 AM",
    pickupLocation: "Lahore",
    dropoffLocation: "Gujranwala",
    vehicleType: "Bike",
    addOn: "Helmet",
    assignedDriver: "Kamran Iqbal",
    total: "$15",
    paymentStatus: "Paid",
    rideStatus: "Completed",
  },
  {
    no: 8,
    bookingId: "BKG130",
    customerName: "Olivia Brown",
    dateTime: "2025-09-16 11:00 AM",
    pickupLocation: "Islamabad",
    dropoffLocation: "Abbottabad",
    vehicleType: "Car",
    addOn: "Baby Seat",
    assignedDriver: "Naveed Akhtar",
    total: "$45",
    paymentStatus: "Approved",
    rideStatus: "Completed",
  },
  {
    no: 9,
    bookingId: "BKG131",
    customerName: "David Wilson",
    dateTime: "2025-09-16 01:00 PM",
    pickupLocation: "Karachi",
    dropoffLocation: "Thatta",
    vehicleType: "Car",
    addOn: "WiFi",
    assignedDriver: "Farhan Ali",
    total: "$35",
    paymentStatus: "Rejected",
    rideStatus: "Cancelled",
  },
  {
    no: 10,
    bookingId: "BKG132",
    customerName: "Ayesha Noor",
    dateTime: "2025-09-16 03:00 PM",
    pickupLocation: "Multan",
    dropoffLocation: "Bahawalpur",
    vehicleType: "Van",
    addOn: "Luggage Space",
    assignedDriver: "Shahbaz Khan",
    total: "$65",
    paymentStatus: "Paid",
    rideStatus: "Completed",
  },
  {
    no: 11,
    bookingId: "BKG133",
    customerName: "Daniel Lee",
    dateTime: "2025-09-16 05:00 PM",
    pickupLocation: "Lahore",
    dropoffLocation: "Kasur",
    vehicleType: "Car",
    addOn: "Music System",
    assignedDriver: "Muneeb Ali",
    total: "$30",
    paymentStatus: "Pending",
    rideStatus: "In Progress",
  },
  {
    no: 12,
    bookingId: "BKG134",
    customerName: "Fatima Zahra",
    dateTime: "2025-09-16 07:00 PM",
    pickupLocation: "Islamabad",
    dropoffLocation: "Rawalpindi",
    vehicleType: "Bike",
    addOn: "Helmet",
    assignedDriver: "Sami Ullah",
    total: "$10",
    paymentStatus: "Paid",
    rideStatus: "Completed",
  },
  {
    no: 13,
    bookingId: "BKG135",
    customerName: "Michael Clark",
    dateTime: "2025-09-16 09:00 PM",
    pickupLocation: "Karachi",
    dropoffLocation: "Sukkur",
    vehicleType: "Bus",
    addOn: "Snacks",
    assignedDriver: "Junaid Khan",
    total: "$90",
    paymentStatus: "Approved",
    rideStatus: "Completed",
  },
  {
    no: 14,
    bookingId: "BKG136",
    customerName: "Zara Khan",
    dateTime: "2025-09-17 08:00 AM",
    pickupLocation: "Faisalabad",
    dropoffLocation: "Lahore",
    vehicleType: "Car",
    addOn: "WiFi",
    assignedDriver: "Rizwan Ahmed",
    total: "$40",
    paymentStatus: "Paid",
    rideStatus: "Completed",
  },
  {
    no: 15,
    bookingId: "BKG137",
    customerName: "George Miller",
    dateTime: "2025-09-17 10:00 AM",
    pickupLocation: "Quetta",
    dropoffLocation: "Gwadar",
    vehicleType: "Van",
    addOn: "Extra Luggage",
    assignedDriver: "Adnan Yousaf",
    total: "$75",
    paymentStatus: "Pending",
    rideStatus: "In Progress",
  },
];


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
const vehicles = [{ label: "Vehicle", value: "select" }, { label: "Car", value: "car" }, { label: "Bike", value: "bike" }, { label: "Truck", value: "truck" }, { label: "Bus", value: "bus" }];

export default function ReservationMainPage() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const lower = search.toLowerCase();
    const results = data.filter((row) =>
      row.bookingId.toLowerCase().includes(lower) ||
      row.customerName.toLowerCase().includes(lower) ||
      row.vehicleType.toLowerCase().includes(lower)
    );
    setFilteredData(results);
  };

  // Define columns
  const columns = [
    { key: "no", header: "No." },
    { key: "bookingId", header: "Booking ID" },
    {
      key: "customerName", header: "Customer Name", render: (row) => (
        <div className='flex items-center gap-2'>
          <img src='/images/jpg/image.png' className='w-8 h-8' />
          <p className="">{row.customerName}</p>
        </div>
      ),
    },
    { key: "dateTime", header: "Date & Time" },
    { key: "pickupLocation", header: "Pickup Location" },
    { key: "dropoffLocation", header: "Dropoff Location" },
    { key: "vehicleType", header: "Vehicle Type" },
    { key: "addOn", header: "Add-on" },
    {
      key: "assignedDriver", header: "Assigned Driver", render: (row) => (
        <div className='flex items-center gap-2'>
          <img src='/images/jpg/image.png' className='w-8 h-8' />
          <p className="">{row.assignedDriver}</p>
        </div>
      ),
    },
    { key: "total", header: "Total" },
    {
      key: "paymentStatus", header: "Payment Status", render: (row) => {
        const statusClass = getStatusColor(row.paymentStatus);
        return (
          <span className={`px-2.5 py-1.5 rounded-[6px] ${statusClass}`}>
            {row.paymentStatus}
          </span>
        );
      }
    },
    {
      key: "rideStatus", header: "Ride Status", render: (row) => {
        const statusClass = getStatusColor(row.rideStatus);
        return (
          <span className={`px-2.5 py-1.5 rounded-[6px] ${statusClass}`}>
            {row.rideStatus}
          </span>
        );
      }
    },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className='flex items-center gap-2'>
          <div onClick={() => setSelectedRow(row)} className="bg-[#007AFF1A] w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer">
            <img src='/images/png/eye.png' className='w-4 h-4' />
          </div>
          <Link href={"/admin/reservation/notifications"}>
            <div className="bg-[#FFCC001A] w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer">
              <img src='/images/png/bell.png' className='w-4 h-4' />
            </div>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className='bg-gray-50 px-6 py-4'>
      <AdminHeader title={"Reservations"} showButtons={false} />
      <div className='bg-white rounded-lg p-4 mt-2'>
        <FilterBar showTimeFilter={true} timeFilters={timeFilters} statuses={statuses} vehicles={vehicles} search={search} setSearch={setSearch} onSearch={handleSearch} />
        <Table
          data={filteredData}
          columns={columns}
          isRecent={false}
          isSuperAdmin={true}
          addBtn="Add Ride"
          icon={<FaPlus />}
        />
        {/* Booking Detail Modal */}
        <CustomModal
          isOpen={!!selectedRow}
          onRequestClose={() => setSelectedRow(null)}
          title="Booking Detail"
        >
          {selectedRow && (
            <BookingDetail row={selectedRow} onClose={() => setSelectedRow(null)} />
          )}
        </CustomModal>
      </div>
    </div>
  )
}
