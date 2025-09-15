import React from 'react'
import FilterBar from '../../common/filterbar/filterbar'
import Table from '../../common/table/table'
import { FaPlus } from 'react-icons/fa';
import BookingDetail from '../../common/bookingDetails/bookingDetails';

const ModalComponent = () => {
  return (
    <div>
      <h1>Modal components</h1>
    </div>
  )
}

export default function ReservationMainPage() {
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
    // More rows...
  ];

  // Define columns
  const columns = [
    { key: "no", header: "No." },
    { key: "bookingId", header: "Booking ID" },
    { key: "customerName", header: "Customer Name" },
    { key: "dateTime", header: "Date & Time" },
    { key: "pickupLocation", header: "Pickup Location" },
    { key: "dropoffLocation", header: "Dropoff Location" },
    { key: "vehicleType", header: "Vehicle Type" },
    { key: "addOn", header: "Add-on" },
    { key: "assignedDriver", header: "Assigned Driver" },
    { key: "total", header: "Total" },
    { key: "paymentStatus", header: "Payment Status" },
    { key: "rideStatus", header: "Ride Status" },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className='flex items-center gap-2'>
          <div className="bg-[#007AFF1A] w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer">
            <img src='/png/eye.png' className='w-4 h-4' />
          </div>
          <div className="bg-[#FFCC001A] w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer">
            <img src='/png/bell.png' className='w-4 h-4' />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='bg-gray-50 px-6 py-4'>
      <h1>Booking</h1>
      <div className='bg-white rounded-lg p-4 mt-2'>
        <FilterBar />
        <Table
          data={data}
          columns={columns}
          className="shadow-lg rounded-xl overflow-hidden"
          isRecent={false} // Show pagination & search
          isSuperAdmin={true} // Show Add button
          addBtn="Add Ride" // Add button text
          icon={<FaPlus />} // Add button icon
          modalComponent={ModalComponent}
        />
        <BookingDetail />
      </div>
    </div>
  )
}
