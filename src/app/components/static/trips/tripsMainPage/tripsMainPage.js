"use client"
import React, { useEffect, useState } from 'react'
import FilterBar from '../../../common/filterbar/filterbar'
import Table from '../../../common/table/table'
import { FaPlus } from 'react-icons/fa';
import BookingDetail from '../../../common/bookingDetails/bookingDetails';
import { getStatusColor } from '../../../../../utils/services';
import CustomModal from '../../../common/modal/modal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DeleteTripModal from "../deleteTripModal/deleteTripModal"
import AdminHeader from '../../../common/adminHeader/adminHeader';

const data = [
  {
    no: 1,
    tripid: "BKG123",
    customerName: "John Doe",
    assignedDriver: "Ali Raza",
    dateTime: "2025-09-15 10:00 AM",
    pickupLocation: "Lahore",
    dropoffLocation: "Islamabad",
    total: "$50",
    status: "Completed",
    paymentStatus: "Paid",
    payoutStatus: "Approved",
    actions: ""
  },
  {
    no: 2,
    tripid: "BKG124",
    customerName: "Sarah Khan",
    assignedDriver: "Ahmed Malik",
    dateTime: "2025-09-15 02:30 PM",
    pickupLocation: "Karachi",
    dropoffLocation: "Hyderabad",
    total: "$35",
    status: "Ongoing",
    paymentStatus: "Pending",
    payoutStatus: "Pending",
    actions: ""
  },
  {
    no: 3,
    tripid: "BKG125",
    customerName: "Michael Smith",
    assignedDriver: "Zeeshan Ali",
    dateTime: "2025-09-16 09:15 AM",
    pickupLocation: "Rawalpindi",
    dropoffLocation: "Lahore",
    total: "$75",
    status: "Cancelled",
    paymentStatus: "Refunded",
    payoutStatus: "Rejected",
    actions: ""
  },
  {
    no: 4,
    tripid: "BKG126",
    customerName: "Ayesha Noor",
    assignedDriver: "Imran Khan",
    dateTime: "2025-09-16 05:45 PM",
    pickupLocation: "Faisalabad",
    dropoffLocation: "Multan",
    total: "$42",
    status: "Completed",
    paymentStatus: "Paid",
    payoutStatus: "Approved",
    actions: ""
  },
  {
    no: 5,
    tripid: "BKG127",
    customerName: "David Johnson",
    assignedDriver: "Hassan Raza",
    dateTime: "2025-09-17 08:00 AM",
    pickupLocation: "Quetta",
    dropoffLocation: "Karachi",
    total: "$90",
    status: "Scheduled",
    paymentStatus: "Pending",
    payoutStatus: "Pending",
    actions: ""
  },
  {
    no: 6,
    tripid: "BKG128",
    customerName: "Maria Ahmed",
    assignedDriver: "Bilal Sheikh",
    dateTime: "2025-09-17 11:30 AM",
    pickupLocation: "Sialkot",
    dropoffLocation: "Lahore",
    total: "$28",
    status: "Completed",
    paymentStatus: "Paid",
    payoutStatus: "Approved",
    actions: ""
  },
  {
    no: 7,
    tripid: "BKG129",
    customerName: "Chris Evans",
    assignedDriver: "Usman Tariq",
    dateTime: "2025-09-18 03:20 PM",
    pickupLocation: "Lahore",
    dropoffLocation: "Gujranwala",
    total: "$22",
    status: "Ongoing",
    paymentStatus: "Pending",
    payoutStatus: "Pending",
    actions: ""
  },
  {
    no: 8,
    tripid: "BKG130",
    customerName: "Fatima Zahra",
    assignedDriver: "Kamran Javed",
    dateTime: "2025-09-18 07:45 PM",
    pickupLocation: "Islamabad",
    dropoffLocation: "Murree",
    total: "$55",
    status: "Completed",
    paymentStatus: "Paid",
    payoutStatus: "Approved",
    actions: ""
  },
  {
    no: 9,
    tripid: "BKG131",
    customerName: "Alex Wilson",
    assignedDriver: "Shahbaz Ali",
    dateTime: "2025-09-19 09:10 AM",
    pickupLocation: "Karachi",
    dropoffLocation: "Sukkur",
    total: "$65",
    status: "Cancelled",
    paymentStatus: "Refunded",
    payoutStatus: "Rejected",
    actions: ""
  },
  {
    no: 10,
    tripid: "BKG132",
    customerName: "Nida Hussain",
    assignedDriver: "Waqas Ahmad",
    dateTime: "2025-09-19 06:25 PM",
    pickupLocation: "Multan",
    dropoffLocation: "Bahawalpur",
    total: "$38",
    status: "Completed",
    paymentStatus: "Paid",
    payoutStatus: "Approved",
    actions: ""
  }
];

const timeFilters = [
   { label: "Last 30 Days", value: "last 30 days" },
  { label: "Last 7 Days", value: "last 7 days" },
  { label: "All", value: "all" },
];

// ✅ Status Filters (updated)
const statuses = [
  { label: "All Status", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "In Progress", value: "in_progress" },
  { label: "Success", value: "success" },
  { label: "Rejected", value: "rejected" },
];

export default function TripsMainPage() {
  const router = useRouter()
  const [selectedRow, setSelectedRow] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  const handleSearch = () => {
    const lower = search.toLowerCase();
    const results = data.filter((row) =>
      row.tripid.toLowerCase().includes(lower) ||
      row.customerName.toLowerCase().includes(lower) ||
      row.assignedDriver.toLowerCase().includes(lower)
    );
    setFilteredData(results);
  };


  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="text-btnHover">{part}</span>
      ) : (
        part
      )
    );
  };


  // useEffect(() => {
  //   const handleClickOutside = () => setOpenDropdown(null);
  //   window.addEventListener("mousedown", handleClickOutside);
  //   return () => window.removeEventListener("mousedown", handleClickOutside);
  // }, []);



  // Define columns
  const columns = [
    { key: "no", header: "No." },
    { key: "tripid", header: "Trip ID" },   // changed from bookingId → tripid
    {
      key: "customerName", header: "Customer Name", render: (row) => (
        <div className='flex items-center gap-2'>
          <img src='/images/jpg/image.png' className='w-8 h-8' />
          <p>{highlightText(row.customerName, search)}</p>
        </div>
      ),
    },
    {
      key: "assignedDriver", header: "Assigned Driver", render: (row) => (
        <div className='flex items-center gap-2'>
          <img src='/images/jpg/image.png' className='w-8 h-8' />
          <p>{row.assignedDriver}</p>
        </div>
      ),
    },
    { key: "dateTime", header: "Date & Time" },
    { key: "pickupLocation", header: "Pickup Location" },
    { key: "dropoffLocation", header: "Dropoff Location" },
    { key: "total", header: "Total Amount" },
    {
      key: "status", header: "Trip Status", render: (row) => {
        const statusClass = getStatusColor(row.status);
        return (
          <span className={`px-2.5 py-1.5 rounded-[6px] ${statusClass}`}>
            {row.status}
          </span>
        );
      }
    },
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
      key: "payoutStatus", header: "Payout Status", render: (row) => {
        const statusClass = getStatusColor(row.payoutStatus);
        return (
          <span className={`px-2.5 py-1.5 rounded-[6px] ${statusClass}`}>
            {row.payoutStatus}
          </span>
        );
      }
    },

    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className='flex items-center gap-2 relative'>
          <div
            onClick={() => setSelectedRow(row)}
            className="bg-inputBg px-4 py-2 gap-2 rounded-lg flex items-center justify-center cursor-pointer"
          >
            <img src='/images/png/send.png' className='w-4 h-4' />
            <p>
              Notify me
            </p>
          </div>
          {/* <Link href={"/"}> */}
          <div
            onClick={(e) => {
              e.stopPropagation()
              setOpenDropdown(openDropdown === row.no ? null : row.no)
            }}
            className="bg-inputBg w-10 h-[36px] rounded-lg flex items-center justify-center cursor-pointer">
            <img src='/images/png/ellipsis-horizontal.png' className='w-4 h-4 object-contain' />
          </div>
          {/* </Link> */}
          {/* Dropdown menu */}
          {openDropdown === row.no && (
            <div onClick={(e) => e.stopPropagation()} className="absolute right-0 top-10 w-60 bg-white shadow-lg shadow-[#ddd] rounded-lg border border-[#E5E5E5] z-50 p-2">
              <ul className="text-sm text-gray-700">
                <li
                  className="px-4 py-3 hover:bg-inputBg cursor-pointer flex items-center gap-2 rounded-md"
                  onClick={() => {
                    setSelectedRow(row);
                    setOpenDropdown(null);
                    router.push("/admin/trips/trip-details")
                  }}
                >
                  <img src={"/images/png/eye.png"} className='w-6 object-contain filter invert' />
                  <p>View Details</p>
                </li>
                <Link href={"/admin/trips/assign-driver"}>
                  <li
                    className="px-4 py-3 hover:bg-inputBg cursor-pointer flex items-center gap-2 rounded-md"
                    onClick={() => {
                      setOpenDropdown(null);

                    }}
                  >
                    <img src={"/images/png/user.png"} className='w-6 object-contain' />
                    <p>Assign Driver</p>
                  </li>
                </Link>
                <Link href={"/admin/trips/send-invoice"}>
                  <li
                    className="px-4 py-3 hover:bg-inputBg cursor-pointer flex items-center gap-2 rounded-md "
                    onClick={() => {
                      setOpenDropdown(null);
                    }}
                  >
                    <img src={"/images/png/calender.png"} className='w-6 object-contain' />
                    <p>Send Invoice</p>
                  </li>
                </Link>
                <li
                  className="px-4 py-2.5 hover:bg-inputBg cursor-pointer text-red-600 flex items-center gap-2 rounded-md"
                  onClick={() => {
                    setOpenDropdown(null);
                    setDeleteModalVisible(true)
                  }}
                >
                  <img src={"/images/png/bin.png"} className='w-6 object-contain' />
                  <p>Cancel Trip </p>
                </li>
              </ul>
            </div>
          )}
        </div >
      ),
    },
  ];


  return (
    <div className='bg-gray-50 px-6 py-4'>
      <AdminHeader showButtons={false} title={"Trips Management"} />
      <div className='bg-white rounded-lg p-4 mt-2'>
        <FilterBar
          timeFilters={timeFilters}
          statuses={statuses}
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
          showVehicle={false}
          showTimeFilter={true}
        />
        <Table
          data={filteredData}
          columns={columns}
          isRecent={false}
          isSuperAdmin={true}
          addBtn="Add Ride"
          icon={<FaPlus />}
        // Pass booking detail modal directly
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
      {deleteModalVisible && <DeleteTripModal onClose={() => setDeleteModalVisible(false)} />}
    </div>
  )
}
