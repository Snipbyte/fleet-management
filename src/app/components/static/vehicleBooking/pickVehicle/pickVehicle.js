"use client";
import React, { useState } from "react";

import VehicleSelectionCard from "@/app/components/common/vehicleSelectionCard/vehicleSelectionCard";
import { FiArrowLeft, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function PickVehicle() {
  const cars = [1, 2, 3, 4, 5, 6, 7, 8];
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cars.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedCars = cars.slice(startIndex, startIndex + pageSize);

  return (
    <div className="w-full">
      <h1 className="font-medium mb-4">Select Your Car</h1>

      {/* Card List */}
      <div className="w-full flex flex-col gap-4">
        {paginatedCars.map((car, i) => (
          <VehicleSelectionCard key={i} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center mt-6">
        <div className="flex border border-slate-200 rounded-md overflow-hidden">
          {/* Prev Button */}
          <button
            className="w-12 h-12 flex items-center justify-center disabled:opacity-50 border-r border-slate-200"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-12 h-12 border-r border-slate-200 ${currentPage === i + 1
                ? "bg-black text-white"
                : "text-gray-700"
                }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            className="w-12 h-12 flex items-center justify-center disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
}
