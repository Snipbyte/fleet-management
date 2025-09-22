import React from 'react'
import SendInvoice from './sendInvoice/sendInvoice'
import AdminHeader from '../../../common/adminHeader/adminHeader'

export default function SendOnvoiceMainPage() {
  return (
    <div className='p-4'>
      <AdminHeader showButtons={false} showIcon={true} title={"Send Invoice"} />
      <SendInvoice />
    </div>
  )
}
