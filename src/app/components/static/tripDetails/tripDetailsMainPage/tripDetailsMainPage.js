"use client";
import React, { useState } from "react";
import TripInfoCard from "../../trips/tripInfoCard/tripInfoCard";
import RouteParticipants from "../../trips/routeParticipants/routeParticipants";
import Actions from "../../trips/actions/actions";

export default function TripDetailsMainPage() {
  const [selected, setSelected] = useState(0);

  const options = [
    { label: "Trip Details", value: "tripdetails" },
    { label: "Payouts", value: "payout" },
  ];

  const handleToggle = (index) => {
    setSelected(index);
  };

  const trip = {
    id: "BKG456",
    status: "In Progress",
    date: "Thu, Oct 06, 2022 - 6 PM : 15",
    duration: "25 min",
    fare: "$120",
    paymentStatus: "Pending",
  };

  const participants = [
    { role: "Customer", name: "Dianne Russell" },
    { role: "Driver", name: "Dianne Russell" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Trip Detail - {trip.id}</h1>

        {/* Toggle Button */}
        <div className="relative w-[20%] inline-flex bg-white rounded-lg p-2">
          <div className="flex relative w-full">
            {options.map((option, index) => (
              <button
                key={index}
                className={`relative w-full z-10 px-3 py-2.5 text-xs font-medium transition-colors duration-300 ${selected === index
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-800"
                  }`}
                onClick={() => handleToggle(index)}
              >
                {option.label}
              </button>
            ))}
            {/* Sliding background */}
            <div
              className="absolute inset-y-0 left-0 z-0 bg-btnHover rounded-md transition-all duration-300 ease-in-out"
              style={{
                width: `${100 / options.length}%`,
                transform: `translateX(${selected * 100}%)`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TripInfoCard trip={trip} />
        <RouteParticipants
          pickup="Downtown Mall"
          dropoff="Airport Terminal 1"
          participants={participants}
        />
      </div>
      <Actions />
    </div>
  );
}
