import React from "react";

export default function DriverInfo({ driver }) {
  return (
    <div className="bg-white rounded-2xl p-6 w-full">
      <h2 className="font-semibold text-lg mb-4">Driver Information</h2>
      <div className="flex items-center gap-4 mb-4">
        <img
          src={"/jpg/image.png"}
          alt={driver.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="font-medium">{driver.name}</p>
          <p className="text-sm text-gray-500">Driver ID: {driver.id}</p>
        </div>
      </div>
      <p className="mt-1 font-medium">Phone Number:</p>
      <p className="mt-1 text-gray-600 text-sm">{driver.phone}</p>
      <p className="mt-2 font-medium ">Email:</p>
      <p className="mt-1 text-gray-600 text-sm"> {driver.email}</p>
      <p className="mt-2 font-medium ">Date & Time:</p>
      <p className="mt-1 text-gray-600 text-sm ">{driver.dateTime}</p>
    </div>
  );
}
