import React from "react";

export default function TripInfoCard({ trip }) {
  const info = [
    { label: "Trip ID", value: trip.id },
    {
      label: "Status",
      value: (
        <p
          className={`px-2 py-1 text-xs w-max rounded-md ${trip.status === "In Progress"
            ? "bg-inProgressStatus text-yellow-600"
            : "bg-gray-100 text-gray-700"
            }`}
        >
          {trip.status}
        </p>
      ),
    },
    { label: "Date & Time", value: trip.date },
    { label: "Duration", value: trip.duration },
    { label: "Fare Amount", value: <p className="text-blue-500">{trip.fare}</p> },
    {
      label: "Payment Status", value: (
        <p className="px-2 py-1 text-xs w-max rounded-md bg-purple-100 text-purple-700">
          {trip.paymentStatus}
        </p>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-xl flex-1 p-4">
      <h2 className="text-lg font-semibold mb-4">Trip Information</h2>
      <div className="space-y-3">
        {info.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center w-full space-y-1.5"
          >
            <div className="w-1/2">
              <p className="font-medium text-gray-700 ">{item.label}</p>
            </div>
            <div className="w-1/2">
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
