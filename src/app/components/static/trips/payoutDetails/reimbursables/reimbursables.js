import React from 'react'

export default function Reimbursables() {
  return (
    <div className='p-4 rounded-2xl bg-white mt-4'>
      <h1 className='font-semibold text-lg ml-4'>Add-Ons / Reimbursables</h1>
      <div className='grid grid-cols-3 mt-2'>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Extra Steps</p>
          <h1 className='font-medium mt-1'>100</h1>
        </div>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Tolls</p>
          <h1 className='font-medium mt-1'>80</h1>
        </div>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Airpost Fees</p>
          <h1 className='font-medium mt-1'>$20</h1>
        </div>
      </div>
    </div>
  )
}
