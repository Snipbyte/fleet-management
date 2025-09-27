import Image from 'next/image'
import React from 'react'

export default function InfoCard({ row }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {/* Customer Info */}
      <div className="bg-inputBg rounded-xl p-4">
        <h3 className="text-sm font-medium mb-3">
          Customer Information
        </h3>
        <div className="flex items-center gap-3 mb-2">
          <Image
            src="/images/jpg/image.png"
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
            src="/images/jpg/image.png"
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
  )
}
