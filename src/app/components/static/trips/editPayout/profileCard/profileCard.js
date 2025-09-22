import React from 'react'

export default function ProfileCard() {
  return (
    <div className='border-t border-t-borderColor'>
      <div className="flex items-center py-6">
        <img
          src="https://placehold.co/60x60.png"
          alt="driver"
          className="w-14 h-14 rounded-full"
        />
        <div className='ml-4'>
          <h1 className="text-lg font-semibold text-gray-800">
            John Smith
          </h1>
          <p className="text-gray-500 text-sm">Driver ID: DRY789</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-btnHover font-bold text-lg">$120</p>
          <p className="text-xs text-purple-500 bg-purple-50 px-3 py-1.5 rounded-md mt-1">Pending</p>
        </div>
      </div>

    </div>
  )
}
