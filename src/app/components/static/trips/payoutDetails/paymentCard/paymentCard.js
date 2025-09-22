import React from 'react'

export default function PaymentCard() {
  return (
    <div className='p-4 rounded-2xl bg-white mt-4'>
      <h1 className='font-semibold text-lg ml-2'>Totals & Paymenst Status</h1>
      <div className='mt-2 flex justify-between ml-2'>
        <p className='w-1/2 text-gray-600 text-sm'>Earnings before deduction</p>
        <h1 className='w-1/2 font-medium mt-1'>$100</h1>
      </div>
      <div className='mt-2 flex justify-between ml-2'>
        <p className='w-1/2 text-gray-600 text-sm'>Total deductions</p>
        <h1 className='w-1/2 font-medium mt-1'>$50</h1>
      </div>
      <div className='mt-2 flex justify-between ml-2'>
        <p className='w-1/2 text-gray-600 text-sm'>Payment Status</p>
        <div className='w-1/2'>
          <h1 className='font-medium mt-1 px-3 py-1 bg-inProgressStatus rounded-md text-yellow-500 w-max'>In Progress</h1>
        </div>
      </div>
      <div className='mt-2 flex justify-between ml-2'>
        <p className='w-1/2 font-semibold text-btnHover text-xl'>Net Trip Pay:</p>
        <h1 className='w-1/2 font-medium mt-1 text-xl text-btnHover'>$150</h1>
      </div>
    </div>
  )
}
