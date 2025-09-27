import React from 'react'
import RideDetails from '../rideDetails/rideDetails'
import Billing from '../billing/billing'
import InvoiceTable from '../invoiceTable/invoiceTable'

export default function InvoiceDetails() {
  return (
    <div className="md:col-span-2 flex flex-col space-y-6 bg-white p-4 rounded-2xl">
      {/* invoice top section */}
      <div className="flex justify-between items-start">
        <div className='w-1/2'>
          <div className='w-full flex items-center justify-between'>
            <h2 className="font-semibold text-sm">Invoice Number:</h2>
            <p className="text-gray-600">INV-2025-001</p>
          </div>
          <div className='w-full flex items-center justify-between'>
            <h2 className="font-semibold mt-2 text-sm ">Date Issued:</h2>
            <p className="text-gray-600">10 August 2025</p>
          </div>
          <div className='w-full flex items-center justify-between'>
            <h2 className="font-semibold mt-2 text-sm0">Due Date:</h2>
            <p className="text-gray-600">17 August 2025</p>
          </div>
        </div>
        <div className="text-center">
          <img
            src="/images/png/footer-logo.png"
            alt="Logo"
            width={90}
            height={90}
            className="mx-auto"
          />
        </div>
      </div>
      <RideDetails />
      <Billing />
      <InvoiceTable />
    </div>
  )
}
