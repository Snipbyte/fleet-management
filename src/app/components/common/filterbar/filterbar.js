"use client";
import { useState, useRef, useEffect } from "react";
import { FiSearch, FiChevronDown, FiX, FiCalendar, FiCheck, FiTruck, FiClock } from "react-icons/fi";
import Button from "../button/button";

export default function FilterBar({ timeFilters = true, showTimeFilter, statuses, vehicles, search, setSearch, onSearch, showVehicle = true, buttonTitle, onClick, showButton = false }) {

  const [timeFilter, setTimeFilter] = useState("Last 30 Days");
  const [status, setStatus] = useState("All Status");
  const [vehicle, setVehicle] = useState("Vehicle");
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isVehicleOpen, setIsVehicleOpen] = useState(false);



  const timeRef = useRef(null);
  const statusRef = useRef(null);
  const vehicleRef = useRef(null);

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
      {/* Search Section */}
      <div className="flex items-center gap-2 relative w-full md:w-2/5">
        <div className="relative flex items-center w-11/12">
          <FiSearch className="absolute left-4 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search Here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-10 py-3 border border-gray-200 rounded-lg bg-inputBg focus:outline-none focus:border-transparent transition-all"
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
        <Button onClick={onSearch} className="px-6 py-3 rounded-lg">
          Search
        </Button>
      </div>

      {/* Filters Section */}
      <div className="flex w-full md:w-3/5 flex-wrap gap-3 items-center justify-start md:justify-end">
        {/* Time Filter */}
        {showTimeFilter &&
          <div className="relative" ref={timeRef}>
            <button
              onClick={() => setIsTimeOpen(!isTimeOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-inputBg  rounded-md hover:border-gray-300 transition-all focus:outline-none min-w-[140px] justify-between"
            >
              <div className="flex items-center gap-2">
                <span>{timeFilter}</span>
              </div>
              <FiChevronDown size={16} className={`text-gray-400 transition-transform ${isTimeOpen ? "rotate-180" : ""}`} />
            </button>

            {isTimeOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-10 overflow-hidden py-2">
                {timeFilters.map((item) => (
                  <div
                    key={item.value}
                    onClick={() => {
                      setTimeFilter(item.label);
                      setIsTimeOpen(false);
                    }}
                    className="px-2 mx-2 py-1.5 flex items-center justify-between rounded-md cursor-pointer hover:bg-btnHover hover:text-white transition-colors"
                  >
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        }

        {/* Status Filter */}
        <div className="relative" ref={statusRef}>
          <button
            onClick={() => setIsStatusOpen(!isStatusOpen)}
            className="flex items-center gap-2 px-4 py-2.5 bg-inputBg  rounded-md hover:border-gray-300 transition-all focus:outline-none min-w-[140px] justify-between"
          >
            <div className="flex items-center gap-2">
              <span className={""}>{status}</span>
            </div>
            <FiChevronDown size={16} className={`text-gray-400 transition-transform ${isStatusOpen ? "rotate-180" : ""}`} />
          </button>

          {isStatusOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-10 overflow-hidden py-2">
              {statuses.map((s) => (
                <div
                  key={s.value}
                  onClick={() => {
                    setStatus(s.label);
                    setIsStatusOpen(false);
                  }}
                  className="mx-2 px-2 py-1.5 flex items-center justify-between cursor-pointer rounded-md hover:bg-btnHover hover:text-white transition-colors"
                >
                  <span>{s.label}</span>
                </div>
              ))}

            </div>
          )}
        </div>

        {/* Vehicle Filter */}
        {showVehicle &&
          <div className="relative" ref={vehicleRef}>
            <button
              onClick={() => setIsVehicleOpen(!isVehicleOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-inputBg rounded-md hover:border-gray-300 transition-all focus:outline-none min-w-[140px] justify-between"
            >
              <div className="flex items-center gap-2">
                <span>{vehicle}</span>
                {vehicle !== "Vehicle"}
              </div>
              <FiChevronDown size={16} className={`text-gray-400 transition-transform ${isVehicleOpen ? "rotate-180" : ""}`} />
            </button>

            {isVehicleOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-10 overflow-hidden py-2">
                {vehicles.map((v) => (
                  <div
                    key={v.value}
                    onClick={() => {
                      setVehicle(v.label);
                      setIsVehicleOpen(false);
                    }}
                    className="px-2 mx-2 py-1.5 flex items-center justify-between cursor-pointer rounded-md hover:bg-btnHover hover:text-white transition-colors"
                  >
                    <span>{v.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        }

        {showButton &&
          <button
            onClick={onClick}
            className="px-4 bg-black text-white py-2.5 rounded-md font-medium hover:bg-gray-800"
          >
            {buttonTitle}
          </button>
        }
      </div>
    </div>
  );
}
