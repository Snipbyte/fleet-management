import React from 'react'

export default function InvoiceDetails() {
  return (
    <div className="md:col-span-2 flex flex-col space-y-6 bg-white p-4 rounded-2xl">
      {/* Header */}
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

      {/* Ride Details + Driver Info */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Ride Details</h3>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Pickup Location:</span> 123 Main
            St, City, State
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Drop-off Location:</span> 123 Main
            St, City, State
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Driver & Company Info</h3>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Driver Name:</span> John Smith
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Driver ID:</span> 123456
          </p>
        </div>
      </div>

      {/* Bill To + Payment Info */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Bill To:</h3>
          <p className="text-sm text-gray-600">
            Vikram JohnSmithtiya <br />
            H. No. 6-AB, Bistol tower, Azad Nagar New Delhi, India <br />
            +91 0000000000
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Payment Mode:</h3>
          <p className="text-sm text-gray-600">
            Credit Card (Visa/MCard)
          </p>
          <p className="text-sm text-gray-600">
            Payment order Number: ASXXXXX
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-black text-white text-left">
              <th className="p-3">Description</th>
              <th className="p-3">Price</th>
              <th className="p-3">VAT (20%)</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">Child Seat</td>
              <td className="p-3">$443.00</td>
              <td className="p-3">$921.80</td>
              <td className="p-3">$9243</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">Child Seat</td>
              <td className="p-3">$443.00</td>
              <td className="p-3">$921.80</td>
              <td className="p-3">$9243</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="font-semibold">
              <td colSpan={3} className="p-3 text-right">
                Total Due
              </td>
              <td className="p-3">$9,750</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
