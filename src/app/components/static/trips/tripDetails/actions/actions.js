import Link from "next/link";
import React from "react";

export default function Actions() {
  return (
    <div className="bg-white rounded-2xl p-5 mt-4 flex gap-3">
      <Link href={"/admin/trips/assign-driver"}>
        <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
          Assign Driver
        </button>
      </Link>
      <Link href={"/admin/trips/send-invoice"}>
        <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
          Send Invoice
        </button>
      </Link>
      <button className="px-4 py-2 bg-[#FF3B30] text-white rounded-lg hover:bg-red-600">
        Cancel Trip
      </button>
    </div>
  );
}
