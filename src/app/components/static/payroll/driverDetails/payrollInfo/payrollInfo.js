import React from 'react'

export default function PayrollInfo() {

  return (
    <>
      <div className="bg-white rounded-2xl p-6 mb-6">
        <h3 className="font-semibold text-lg mb-4">Default Pay Rates</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium mb-1.5">Hourly Rate:</p>
            <p>$ 300/hour</p>
          </div>
          <div>
            <p className="font-medium mb-1.5">Overtime:</p>
            <p>PKR 450/hour</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 mb-6">
        <h3 className="font-semibold text-lg mb-4">Payment Information</h3>
        <div className="grid grid-cols-1 text-sm">
          <div className='flex items-center justify-between'>
            <p className="font-medium mb-1.5">Tax ID:</p>
            <p>TAX424</p>
          </div>
          <div className='flex items-center justify-between mt-2'>
            <p className="font-medium mb-1.5">Payment Method:</p>
            <p>Bank Transfer</p>
          </div>
          <div className='flex items-center justify-between mt-2'>
            <p className="font-medium mb-1.5">Bank Account:</p>
            <p>****-****-54545</p>
          </div>
        </div>
      </div>
    </>
  );
}


