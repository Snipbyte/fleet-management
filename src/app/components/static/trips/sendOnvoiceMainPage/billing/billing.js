import React from 'react'

export default function Billing() {
  return (
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
  )
}
