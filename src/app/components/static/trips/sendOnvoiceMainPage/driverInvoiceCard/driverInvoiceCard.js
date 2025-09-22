import Image from 'next/image'
import React from 'react'
import Button from '../../../../common/button/button'

export default function DriverInvoiceCard() {
  return (
    <div className="bg-white rounded-2xl space-y-6 p-4 h-max">
      {/* Profile */}
      <h1 className='font-semibold'>Send</h1>
      <div className="flex items-center gap-3 border-borderColor bg-activeBeige p-2 rounded-lg">
        <img
          src="/images/jpg/image.png"
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">John Smith</p>
          <p className="text-xs text-gray-600">john.smith@email.com</p>
          <p className="text-xs text-gray-600">+92 300 1234567</p>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Message to Customer:
        </label>
        <textarea
          rows={4}
          defaultValue="Hi, John Smith, please find your invoice for trip BKG123 attached. Payment is due within 7 days, Thank you for choosing our service!"
          className="w-full rounded-lg p-2 text-sm bg-inputBg outline-none"
        />
      </div>

      {/* Delivery Option */}
      <label className="block text-sm font-medium mb-1">
        Delivery option:
      </label>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="pdf" className="h-4 w-4" />
        <label htmlFor="pdf" className="text-sm">
          Include PDF attachment
        </label>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 border rounded-lg px-4 py-2.5 text-sm font-medium">
          Download PDF
        </button>
        <button className="flex-1 bg-black text-white rounded-lg px-4 py-2.5 text-sm font-medium">
          Send Invoice
        </button>
      </div>
    </div>
  )
}
