import React from 'react'

export default function AdminHeader({ title, showIcon }) {
  return (
    <div className='flex items-center gap-2'>
      {showIcon && <img src={"/images/png/arrow-back.png"} className='w-8 h-8 object-contain' />}
      <h1 className='font-semibold text-lg'>{title}</h1>
    </div>
  )
}
