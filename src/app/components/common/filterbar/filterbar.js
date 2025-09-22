"use client";
import React, { useRef, useEffect } from "react";
import { FiSearch, FiChevronDown, FiX } from "react-icons/fi";

export default function FilterBar({
  timeFilters = [],
  showTimeFilter = true,
  statuses = [],
  vehicles = [],
  search,
  setSearch,
  onSearch,
  showVehicle = true,
  buttonTitle,
  onClick,
  showButton = false,
  // ✅ Controlled props from parent
  selectedTime,
  setSelectedTime,
  selectedStatus,
  setSelectedStatus,
}) {
  const [isTimeOpen, setIsTimeOpen] = React.useState(false);
  const [isStatusOpen, setIsStatusOpen] = React.useState(false);
  const [isVehicleOpen, setIsVehicleOpen] = React.useState(false);

  const timeRef = useRef(null);
  const statusRef = useRef(null);
  const vehicleRef = useRef(null);

  // ✅ Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (timeRef.current && !timeRef.current.contains(event.target)) setIsTimeOpen(false);
      if (statusRef.current && !statusRef.current.contains(event.target)) setIsStatusOpen(false);
      if (vehicleRef.current && !vehicleRef.current.contains(event.target)) setIsVehicleOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white mb-4">
      {/* 🔍 Search Section */}
      <div className="flex items-center gap-2 relative w-full md:w-2/5 lg:w-1/2">
        <div className="relative flex items-center w-11/12">
          <FiSearch className="absolute left-4 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search Here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-10 py-3 border border-gray-200 rounded-lg bg-inputBg focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FiX size={18} />
            </button>
          )}
        </div>
        <button
          onClick={onSearch}
          className="bg-btnBg hover:bg-btnHover text-white px-4 py-3 rounded-lg transition-all"
        >
          Search
        </Button>
      </div>

      {/* 🏷 Filters Section */}
      <div className="flex w-full md:w-3/5 flex-wrap gap-3 items-center justify-start md:justify-end">

        {/* Time Filter */}
        {showTimeFilter && (
          <div className="relative" ref={timeRef}>
            <button
              onClick={() => setIsTimeOpen(!isTimeOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-inputBg rounded-md min-w-[140px] justify-between"
            >
              <span>
                {timeFilters.find((t) => t.value === selectedTime)?.label || "Select Time"}
              </span>
              <FiChevronDown
                size={16}
                className={`text-gray-400 transition-transform ${isTimeOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isTimeOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-10 overflow-hidden py-2">
                {timeFilters.map((item) => (
                  <div
                    key={item.value}
                    onClick={() => {
                      setSelectedTime(item.value);
                      setIsTimeOpen(false);
                    }}
                    className="px-2 mx-2 py-1.5 cursor-pointer rounded-md hover:bg-btnHover hover:text-white transition-colors"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Status Filter */}
        {statuses.length > 0 && (
          <div className="relative" ref={statusRef}>
            <button
              onClick={() => setIsStatusOpen(!isStatusOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-inputBg rounded-md min-w-[140px] justify-between"
            >
              <span>
                {statuses.find((s) => s.value === selectedStatus)?.label || "All Status"}
              </span>
              <FiChevronDown
                size={16}
                className={`text-gray-400 transition-transform ${isStatusOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isStatusOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-10 overflow-hidden py-2">
                {statuses.map((s) => (
                  <div
                    key={s.value}
                    onClick={() => {
                      setSelectedStatus(s.value);
                      setIsStatusOpen(false);
                    }}
                    className="px-2 mx-2 py-1.5 cursor-pointer rounded-md hover:bg-btnHover hover:text-white transition-colors"
                  >
                    {s.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Vehicle Filter (optional) */}
        {showVehicle && vehicles.length > 0 && (
          <div className="relative" ref={vehicleRef}>
            {/* Similar pattern */}
          </div>
        )}

        {/* Action Button */}
        {showButton && (
          <button
            onClick={onClick}
            className="px-4 bg-black text-white py-2.5 rounded-md font-medium hover:bg-gray-800"
          >
            {buttonTitle}
          </button>
        )}
      </div>
    </div>
  );
}
