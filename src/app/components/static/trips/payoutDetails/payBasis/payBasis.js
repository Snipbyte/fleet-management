import React from 'react'

export default function PayBasis() {
  return (
    <div className='p-4 rounded-2xl bg-white mt-4'>
      <h1 className='font-semibold text-lg ml-4'>Pay Basis</h1>
      <div className='grid grid-cols-2 lg:grid-cols-5 mt-2'>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Pay Type</p>
          <h1 className='font-medium mt-1'>Hourly</h1>
        </div>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Hourly Rate</p>
          <h1 className='font-medium mt-1'>300</h1>
        </div>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Bilable Hours</p>
          <h1 className='font-medium mt-1'>2.5 hours</h1>
        </div>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Overtime Hours</p>
          <h1 className='font-medium mt-1'>0</h1>
        </div>
        <div className='bg-blue-100 p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Calculated Base Pay</p>
          <h1 className='font-semibold mt-1 text-xl'>$120</h1>
        </div>
      </div>
    </div>
  )
}
