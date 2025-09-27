"use client"
import React, { useState } from 'react'
import FilterBar from '../../../../common/filterbar/filterbar';
import Table from '../../../../common/table/table';
import CustomModal from '../../../../common/modal/modal';
import BookingDetail from '../../../../common/bookingDetails/bookingDetails';
import { FaPlus } from 'react-icons/fa';
import DeleteTripModal from '../../../trips/deleteTripModal/deleteTripModal';
import { getStatusColor } from '../../../../../../../utils/services';

const data = [
  {
    no: 1,
    payperiod: "BKG123",
    trips: "John Doe",
    earning: "54",
    status: "Completed",
  },
  {
    no: 2,
    payperiod: "BKG124",
    trips: "Sara Johson",
    earning: "0",
    status: "Cancelled",
  },
  {
    no: 3,
    payperiod: "BKG125",
    trips: "John Doe",
    earning: "234",
    status: "Completed",
  },
  {
    no: 4,
    payperiod: "BKG126",
    trips: "John Doe",
    earning: "67",
    status: "Success",
  },
  {
    no: 5,
    payperiod: "BKG127",
    trips: "John Doe",
    earning: "434",
    status: "On Going",
  },

];

const timeFilters = [
  { label: "Today", value: "today" },
  { label: "This Week", value: "this_week" },
  { label: "This Month", value: "this_month" },
];

const statuses = [
  { label: "All Status", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "In Progress", value: "in_progress" },
  { label: "Success", value: "success" },
  { label: "Ongoing", value: "ongoing" },
  { label: "Rejected", value: "rejected" },
];

export default function PayrollHistory() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  const handleSearch = () => {
    const lower = search.toLowerCase();
    const results = data.filter((row) =>
      row.tripid.toLowerCase().includes(lower) ||
      row.customerName.toLowerCase().includes(lower) ||
      row.assignedDriver.toLowerCase().includes(lower)
    );
    setFilteredData(results);
  };

  // Define columns
  const columns = [
    { key: "no", header: "No." },
    { key: "payperiod", header: "Pay Period" },
    { key: "trips", header: "Trips" },
    { key: "earning", header: "Earning" },
    {
      key: "status", header: "Trip Status", render: (row) => {
        const statusClass = getStatusColor(row.status);
        return (
          <span className={`px-2.5 py-1.5 rounded-[6px] ${statusClass}`}>
            {row.status}
          </span>
        );
      }
    },
  ];


  return (
    <div className='p-4 bg-white rounded-xl'>
      <FilterBar
        timeFilters={timeFilters}
        statuses={statuses}
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
        showVehicle={false}
        showTimeFilter={true}
      />
      <Table
        data={filteredData}
        columns={columns}
        isRecent={false}
        isSuperAdmin={true}
        addBtn="Add Ride"
        icon={<FaPlus />}
      />
      {/* Booking Detail Modal */}
      <CustomModal
        isOpen={!!selectedRow}
        onRequestClose={() => setSelectedRow(null)}
        title="Booking Detail"
      >
        {selectedRow && (
          <BookingDetail row={selectedRow} onClose={() => setSelectedRow(null)} />
        )}

      </CustomModal>
      {deleteModalVisible && <DeleteTripModal onClose={() => setDeleteModalVisible(false)} />}
    </div>
  )
}
