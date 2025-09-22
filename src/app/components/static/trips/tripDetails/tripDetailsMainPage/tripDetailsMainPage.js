"use client";
import React, { useState } from "react";
import TripInfoCard from "../../tripDetails/tripInfoCard/tripInfoCard";
import RouteParticipants from "../../tripDetails/routeParticipants/routeParticipants";
import Actions from "../../tripDetails/actions/actions";
import AdminHeader from "../../../../common/adminHeader/adminHeader";

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
        <AdminHeader showButtons={false} showIcon={true} title={`Trip Detail - ${trip.id}`} />
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
