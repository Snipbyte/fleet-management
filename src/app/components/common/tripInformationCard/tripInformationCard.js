import React from 'react'

export default function TripInformationCard({ showStatus = false }) {
  const trip = {
    id: "BKG456",
    date: "Thu, Oct 06, 2022 - 6 PM : 15",
    duration: "25 min",
    fare: "$120",
    pickup: "Downtown Mall",
    dropoff: "Airport Terminal 1",
  };
  return (
    <div div className="bg-white rounded-2xl p-6" >
      <h2 className="text-sm font-medium text-gray-700 mb-4">
        Trip Information
      </h2>
      <div className="grid grid-cols-2 gap-y-3 text-sm">
        <div className="col-span-1 text-gray-500">Trip ID:</div>
        <div className="col-span-1 text-gray-900 font-medium">{trip.id}</div>

        <div className="col-span-1 text-gray-500">Date & Time:</div>
        <div className="col-span-1 text-gray-900">{trip.date}</div>

        <div className="col-span-1 text-gray-500">Duration:</div>
        <div className="col-span-1 text-gray-900">{trip.duration}</div>

        <div className="col-span-1 text-gray-500">Fare Amount:</div>
        <div className="col-span-1 text-yellow-600 font-medium">{trip.fare}</div>

        <div className="col-span-1 text-gray-500">Pickup Location:</div>
        <div className="col-span-1 text-gray-900 font-medium">{trip.pickup}</div>

        <div className="col-span-1 text-gray-500">Dropoff Location:</div>
        <div className="col-span-1 text-gray-900 font-medium">{trip.dropoff}</div>
        {showStatus &&
          <>
            <div className="col-span-1 text-gray-500">Status</div>
            <div className="col-span-1 font-medium bg-inProgressStatus w-max px-4 py-1 rounded-md text-yellow-500">In Progress</div>
          </>
        }
      </div>

    </div>
  )
}
