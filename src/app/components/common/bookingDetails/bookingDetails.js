"use client";

import InfoCard from "../../common/bookingDetails/infoCard/infoCard"
import TripDetails from "../../common/bookingDetails/tripDetails/tripDetails"

export default function BookingDetail({ row, onClose }) {
  if (!row) return null;

  return (
    <div className="w-full mx-auto">
      <InfoCard row={row} />
      <TripDetails row={row} />
    </div>
  );
}
