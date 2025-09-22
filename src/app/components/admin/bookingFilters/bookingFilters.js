"use client"

import { useState } from "react"
import { FiSearch, FiFilter } from "react-icons/fi"

export default function BookingFilters({ onStatusChange, onSearch, selectedStatus }) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    onSearch(e.target.value)
  }

  const statusOptions = [
    { value: "all", label: "All Bookings" },
    { value: "pending", label: "Pending" },
    { value: "confirmed", label: "Confirmed" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
    { value: "no-show", label: "No Show" },
  ]

  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="search"
          placeholder="Search bookings..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none w-full md:w-64"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiFilter className="h-4 w-4 text-gray-400" />
        </div>
        <select
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none appearance-none bg-white w-full md:w-auto"
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
