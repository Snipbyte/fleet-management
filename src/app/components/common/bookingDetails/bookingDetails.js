"use client";
import Image from "next/image";

export default function BookingDetail() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Booking Detail</h2>
        <button className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Customer Info */}
        <div className="bg-gray-50 rounded-xl p-4 border">
          <h3 className="text-sm font-medium text-gray-600 mb-3">
            Customer Information
          </h3>
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/user1.jpg" // replace with your image path
              alt="customer"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">John Smith</p>
              <p className="text-xs text-gray-500">+1 555-0123</p>
            </div>
          </div>
          <p className="text-xs text-gray-600">
            Email: <span className="text-gray-800">alleyx@gmail.com</span>
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Date & Time:{" "}
            <span className="text-gray-800">Thu, Oct 06, 2022 & 6:15pm</span>
          </p>
        </div>

        {/* Driver Info */}
        <div className="bg-gray-50 rounded-xl p-4 border">
          <h3 className="text-sm font-medium text-gray-600 mb-3">
            Driver Information
          </h3>
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/user2.jpg" // replace with your image path
              alt="driver"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">Alley Mark</p>
              <p className="text-xs text-gray-500">+1 555-0123</p>
            </div>
          </div>
          <p className="text-xs text-gray-600">
            Vehicle: <span className="text-gray-800">Chevrolet Yukon</span>
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Licence: <span className="text-gray-800">DL123456</span>
          </p>
        </div>
      </div>

      {/* Trip Details */}
      <div className="bg-gray-50 rounded-xl p-4 border">
        <h3 className="text-sm font-medium text-gray-600 mb-3">Trip Details</h3>

        {/* Pickup & Dropoff */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <p className="text-xs text-gray-600">
            Pickup Location:{" "}
            <span className="text-gray-800">
              123 Main St, City, State
            </span>
          </p>
          <p className="text-xs text-gray-600">
            Destination:{" "}
            <span className="text-gray-800">
              456 Oak Ave, City, State
            </span>
          </p>
        </div>

        {/* Time & Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-3 border">
            <p className="text-xs text-gray-600">Booking Time</p>
            <p className="text-sm font-semibold text-gray-800">09:30 AM</p>
          </div>
          <div className="bg-white rounded-lg p-3 border">
            <p className="text-xs text-gray-600">Payment Status</p>
            <p className="text-sm font-semibold text-green-600">Paid</p>
          </div>
          <div className="bg-white rounded-lg p-3 border">
            <p className="text-xs text-gray-600">Trip Status</p>
            <p className="text-sm font-semibold text-yellow-500">In Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}
