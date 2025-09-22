import React from 'react'

export default function TripSummary() {
  return (
    <div className='p-4 rounded-2xl bg-white mt-4'>
      <h1 className='font-semibold text-lg ml-4'>Gratuties</h1>
      <div className='grid grid-cols-2 lg:grid-cols-5 mt-2'>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Total Gratuty</p>
          <h1 className='font-medium mt-1'>$100</h1>
        </div>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Driver Percentage</p>
          <h1 className='font-medium mt-1'>80%</h1>
        </div>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Percentage to Driver</p>
          <h1 className='font-medium mt-1'>$20</h1>
        </div>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Extra Gratuity</p>
          <h1 className='font-medium mt-1'>$50</h1>
        </div>
        <div className='bg-green-100 p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Total Driver</p>
          <h1 className='font-semibold mt-1 text-xl'>$120</h1>
        </div>
      </div>
    </div>
  )
}
