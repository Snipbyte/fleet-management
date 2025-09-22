import React from 'react'
import AssignDriverCard from '../assignDriverCard/assignDriverCard'
import AssignDriverTable from '../assignDriverTable/assignDriverTable'
import AdminHeader from "../../../common/adminHeader/adminHeader"

export default function AssignDriverMainPage() {
  return (
    <div className='p-4'>
      <AdminHeader title={"Assign Driver Trip BK0423"} showIcon={true} />
      <AssignDriverCard />
      <AssignDriverTable />
    </div>
  )
}
