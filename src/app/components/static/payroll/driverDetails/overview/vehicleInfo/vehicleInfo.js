import React from "react";

export default function VehicleInfo({ vehicle }) {
  return (
    <div className="bg-white rounded-2xl p-6 mb-6">
      <h3 className="font-semibold text-lg mb-4">Vehicle Information</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <p className="font-medium mb-1.5">Make & Model:</p>
          <p>{vehicle.model}</p>
        </div>
        <div>
          <p className="font-medium mb-1.5">Pay Rate:</p>
          <p>{vehicle.rate}</p>
        </div>
        <div>
          <p className="font-medium mb-1.5">Year:</p>
          <p>{vehicle.year}</p>
        </div>
        <div>
          <p className="font-medium mb-1.5">Plate Number:</p>
          <p> {vehicle.plate}</p>
        </div>
      </div>
    </div>
  );
}
