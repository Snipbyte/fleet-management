"use client";
import { getStatusColor } from "../../../../utils/services";
import Image from "next/image";

export default function BookingDetail({ row, onClose }) {
  if (!row) return null; // safeguard

  return (
    <div className="w-full mx-auto">
      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Customer Info */}
        <div className="bg-inputBg rounded-xl p-4">
          <h3 className="text-sm font-medium mb-3">
            Customer Information
          </h3>
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/jpg/image.png"
              alt="customer"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div className="">
              <p className="text-sm font-semibold text-gray-800">{row.customerName}</p>
              <p className="text-xs text-gray-500 mt-2">+1 555-0123</p>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center mt-4">
            <p className="text-xs text-gray-600 w-1/2">
              Email:
            </p>
            <p className="text-xs text-gray-800 w-1/2">alleyx@gmail.com</p>
          </div>
          <div className="w-full flex flex-row justify-between items-center mt-2">
            <p className="text-xs text-gray-600 w-1/2">
              Date & Time:
            </p>
            <p className="text-xs text-gray-800 w-1/2">{row.dateTime}</p>
          </div>

        </div>

        {/* Driver Info */}
        <div className="bg-inputBg rounded-xl p-4">
          <h3 className="text-sm font-medium mb-3">
            Driver Information
          </h3>
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/jpg/image.png"
              alt="customer"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div >
              <p className="text-sm font-semibold">{row.assignedDriver}</p>
              <p className="text-xs text-gray-500 mt-2">+1 555-0123</p>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center mt-4">
            <p className="text-xs text-gray-600 w-1/2">
              Vehicle
            </p>
            <p className="text-xs text-gray-800 w-1/2">
              {row.vehicleType}
            </p>
          </div>
          <div className="w-full flex flex-row justify-between items-center mt-2">
            <p className="text-xs text-gray-600 w-1/2">
              Licence:
            </p>
            <span className="text-xs text-gray-800 w-1/2">DL123456</span>
          </div>
        </div>
      </div>

      {/* Trip Details */}
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
    </div>
  );
}
