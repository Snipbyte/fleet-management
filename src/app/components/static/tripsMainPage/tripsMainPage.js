"use client"
import React, { useState } from 'react'
import FilterBar from '../../common/filterbar/filterbar'
import Table from '../../common/table/table'
import { FaPlus } from 'react-icons/fa';
import BookingDetail from '../../common/bookingDetails/bookingDetails';
import { getStatusColor } from '../../../../utils/services';
import CustomModal from '../../common/modal/modal';
import Link from 'next/link';

export default function TripsMainPage() {
  const [selectedRow, setSelectedRow] = useState(null);
  const data = [
    {
      no: 1,
      tripid: "BKG123",
      customerName: "John Doe",
      assignedDriver: "2025-09-15 10:00 AM",
      dateTime: "34/5/54",
      pickupLocation: "Lahore",
      dropoffLocation: "Islamabad",
      total: "$50",
      status: "Completed",
      paymentStatus: "Paid",
      payoutStatus: "Approved",
      actions: ""
    },
  ];


  // Define columns
  const columns = [
    { key: "no", header: "No." },
    { key: "bookingId", header: "Booking ID" },
    {
      key: "customerName", header: "Customer Name", render: (row) => (
        <div className='flex items-center gap-2'>
          <img src='/jpg/image.png' className='w-8 h-8' />
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
          <img src='/jpg/image.png' className='w-8 h-8' />
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
            <img src='/png/eye.png' className='w-4 h-4' />
          </div>
          <Link href={"/admin/reservation/notifications"}>
            <div className="bg-[#FFCC001A] w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer">
              <img src='/png/bell.png' className='w-4 h-4' />
            </div>
          </Link>
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
    </div>
  )
}
