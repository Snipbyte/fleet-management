"use client"
import React from 'react'
import AdminHeader from '../../../../common/adminHeader/adminHeader'
import AssignDriverCard from '../../../../common/assignDriverCard/assignDriverCard'
import TripInformationCard from '../../../../common/tripInformationCard/tripInformationCard'
import PayBasis from "../payBasis/payBasis"
import Gratuity from "../gratiuties/gratuties"
import Reimbursables from "../reimbursables/reimbursables"
import DeductionsCard from "../deductionsCard/deductionsCard"
import PaymentCard from "../paymentCard/paymentCard"
import { useParams, usePathname, useSearchParams } from 'next/navigation'

export default function PayoutDetailsMainPage() {
  return (
    <div className='p-4'>
      <AdminHeader showIcon={true} title={"Payout Details"} />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2'>
        <AssignDriverCard cardTitle={"Assigned Driver"} showButton={true} />
        <TripInformationCard showStatus={true} />
      </div>
      <PayBasis />
      <Gratuity />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
        <Reimbursables />
        <DeductionsCard />
      </div>
      <PaymentCard />
    </div>
  )
}
