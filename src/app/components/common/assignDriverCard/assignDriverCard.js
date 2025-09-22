"use client";
import React from "react";
import Button from "../../../components/common/button/button";

export default function AssignDriverCard({ showButton, cardTitle }) {
  const driver = {
    name: "Dianne Russell",
    role: "Driver",
    phone: "+1555-0123",
    vehicle: "Toyota",
    license: "DL123456",
    status: "Active",
    avatar: "/images/jpg/image.png",
  };

  const trip = {
    id: "BKG456",
    date: "Thu, Oct 06, 2022 - 6 PM : 15",
    duration: "25 min",
    fare: "$120",
    pickup: "Downtown Mall",
    dropoff: "Airport Terminal 1",
  };

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-sm font-medium text-gray-700 mb-4">
        {cardTitle}
      </h2>
      <div className="flex items-center gap-4 mt-6">
        <img
          src={driver.avatar}
          alt={driver.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="text-sm text-gray-500">{driver.role}</p>
          <p className="text-base font-semibold text-gray-900">
            {driver.name}
          </p>
        </div>
        <span className="ml-auto px-2 py-0.5 text-xs font-medium text-green-700 bg-green-100 rounded-sm">
          {driver.status}
        </span>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Phone Number</p>
          <p className="text-gray-900">{driver.phone}</p>
        </div>
        <div>
          <p className="text-gray-500">Vehicle</p>
          <p className="text-gray-900">{driver.vehicle}</p>
        </div>
        <div>
          <p className="text-gray-500">Licence</p>
          <p className="text-gray-900">{driver.license}</p>
        </div>
      </div>

      {showButton ? <Button className="px-4 py-2 rounded-xl bg-inputBg border-none mt-3">View Details</Button> :
        <p className="mt-6 text-xs text-btnHover">
          Assigning a new driver will replace the current assignment.
        </p>
      }
    </div>
  );
}
