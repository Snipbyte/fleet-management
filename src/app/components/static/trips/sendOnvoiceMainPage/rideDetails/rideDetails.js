import React from 'react'

export default function RideDetails() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Ride Details</h3>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Pickup Location:</span> 123 Main
          St, City, State
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Drop-off Location:</span> 123 Main
          St, City, State
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Driver & Company Info</h3>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Driver Name:</span> John Smith
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Driver ID:</span> 123456
        </p>
      </div>
    </div>

  )
}
