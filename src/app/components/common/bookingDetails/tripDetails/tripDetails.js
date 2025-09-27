import React from 'react'
import { getStatusColor } from '../../../../../../utils/services'

export default function TripDetails({ row }) {
  return (
    <div className="">
      <h3 className="text-sm font-medium mb-3">Trip Details</h3>

      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <p className="text-xs text-gray-600">
            Pickup Location:{" "}
          </p>
          <p className="text-gray-800 text-sm mt-1">{row.pickupLocation}</p>
        </div>
        <div className="w-1/2">
          <p className="text-xs text-gray-600">Destination:</p>
          <p className="text-gray-800 text-sm mt-1">{row.dropoffLocation}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pb-2">
        <div className="bg-[#F6F6F666] rounded-md p-3">
          <p className="text-xs text-gray-600">Booking Time</p>
          <p className="text-sm font-medium text-gray-800 mt-1">{row.dateTime}</p>
        </div>
        <div className="bg-[#F6F6F666] rounded-md p-3">
          <p className="text-xs text-gray-600">Payment Status</p>
          <p
            className={`inline-block text-sm font-medium text-gray-800 mt-1 px-3 py-1 rounded-[6px] ${getStatusColor(
              row.paymentStatus
            )}`}
          >
            {row.paymentStatus}
          </p>

        </div>
        <div className="bg-[#F6F6F666] rounded-md p-3">
          <p className="text-xs text-gray-600">Trip Status</p>
          <p
            className={`inline-block text-sm font-medium text-gray-800 mt-1 px-3 py-1 rounded-[6px] ${getStatusColor(
              row.rideStatus
            )}`}
          >
            {row.rideStatus}
          </p>
        </div>
      </div>
    </div>
  )
}
