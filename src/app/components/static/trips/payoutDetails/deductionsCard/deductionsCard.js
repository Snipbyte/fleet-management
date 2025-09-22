import React from 'react'

export default function DeductionsCard() {
  return (
    <div className='p-4 rounded-2xl bg-white mt-4'>
      <h1 className='font-semibold text-lg ml-4'>Deductions</h1>
      <div className='grid grid-cols-2 mt-2'>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Commission Split</p>
          <h1 className='font-medium mt-1'>10%</h1>
        </div>
        <div className='p-4 rounded-lg'>
          <p className='text-gray-600 text-sm'>Advances</p>
          <h1 className='font-medium mt-1'>$80</h1>
        </div>
      </div>
    </div>
  )
}
