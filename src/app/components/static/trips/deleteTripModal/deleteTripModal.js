import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import Checkbox from "../../../common/checkbox/checkbox"
import Button from '../../../common/button/button'
export default function DeleteTripModal({ trip, onClose }) {
  return (
    <div className='z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center'>
      <div className='w-1/2 max-w-2xl rounded-2xl bg-white p-6'>
        <div className='flex items-center justify-between py-2'>
          <h1 className='font-semibold text-lg'>Delete Trip {"BKG456"}</h1>
          <RiCloseCircleFill onClick={onClose} size={30} className='text-gray-200 cursor-pointer' />
        </div>
        <p className='mt-2'>This action cannot be undone. Cancelling this trip will permanently change its status and may trigger notifications and refund processess.</p>
        <h1 className='font-semibold mt-4 text-sm'>Notification Settings</h1>
        <div className='space-y-3 mt-4'>
          <Checkbox label={"Notify customer about cancellation"} />
          <Checkbox label={"Notify driver about cancellation"} />
        </div>
        <div className='flex items-center justify-end gap-4'>
          <Button onClick={onClose} className='px-6 py-3 rounded-xl border-none bg-inputBg text-black'>Cancel</Button>
          <Button className='px-6 py-3 rounded-xl border-none bg-red-500'>Delete</Button>
        </div>
      </div>
    </div>
  )
}
