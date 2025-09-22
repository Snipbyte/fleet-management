import React from 'react'
import AssignDriverCard from '../../../common/assignDriverCard/assignDriverCard'
import TripInformationCard from '../../../common/tripInformationCard/tripInformationCard'
import AssignDriverTable from '../assignDriverTable/assignDriverTable'
import AdminHeader from "../../../common/adminHeader/adminHeader"

export default function AssignDriverMainPage() {
  return (
    <div className='p-4'>
      <AdminHeader showButtons={false} title={"Assign Driver Trip BK0423"} showIcon={true} />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2'>
        <AssignDriverCard cardTitle={"Currently Assigned Driver"} />
        <TripInformationCard />
      </div>
      <AssignDriverTable />
    </div>
  )
}
