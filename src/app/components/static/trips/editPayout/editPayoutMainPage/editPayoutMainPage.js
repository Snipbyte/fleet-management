import AdminHeader from '../../../../common/adminHeader/adminHeader'
import React from 'react'
import Payout from "../payout/payout"


export default function EditPayoutMainPage() {
  return (
    <div className='p-4'>
      <AdminHeader title={"Trip Payout Details"} showIcon={true} showButtons={false} buttonVisible={true} />
      <Payout />
    </div>
  )
}
