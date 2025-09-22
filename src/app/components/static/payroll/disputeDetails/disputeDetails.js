import React from 'react'
import Button from '../../../common/button/button';

export default function DisputeDetails() {
  const trip = {
    id: "BKG456",
    date: "Thu, Oct 06, 2022 - 6 PM : 15",
    duration: "25 min",
    fare: "$120",
    pickup: "Downtown Mall",
    dropoff: "Airport Terminal 1",
  };
  return (
    <div div className="bg-white rounded-2xl px-2" >
      <div className="grid grid-cols-2 gap-y-3 text-sm">
        <div className="col-span-1 text-gray-500">Ticket ID:</div>
        <div className="col-span-1 text-gray-900 font-medium">{trip.id}</div>

        <div className="col-span-1 text-gray-500">Type:</div>
        <div className="col-span-1 text-gray-900">Period</div>

        <div className="col-span-1 text-gray-500">Status</div>
        <div className="col-span-1 font-medium bg-inProgressStatus w-max px-4 py-1 rounded-md text-yellow-500">Pending</div>

        <div className="col-span-1 text-gray-500">Submitted On:</div>
        <div className="col-span-1 font-medium">Oct 6, 2024</div>

        <div className="col-span-1 text-gray-500">Category:</div>
        <div className="col-span-1 font-medium">Missing Reimbursables</div>

        <div className="col-span-1 text-gray-500">Last Update</div>
        <div className="col-span-1 font-medium">Oct 6, 2024</div>

        <div className="col-span-1 text-gray-500">Description</div>
        <div className="col-span-1 font-medium"></div>
      </div>
      <div className='mt-3 w-full'>
        <textarea className='p-3 w-full rounded-xl bg-inputBg outline-none' rows={4} placeholder='Missing toll reimbursement for Highway 95 on Jan 16th. Receipt attached.' />
        <div className='flex items-center justify-between py-3 border-t border-t-borderColor mt-2'>
          <h1 className='font-semibold text-xl'>Actions</h1>
          <Button className='px-4 rounded-lg border-none'>Resolve</Button>
        </div>
      </div>
    </div>
  )
}
