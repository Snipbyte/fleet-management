import React from 'react'
import AdminHeader from '../../../common/adminHeader/adminHeader'
import StatsSection from '../statsSection/statsSection'
import LineChart from '../lineChart/lineChart'
import BarChart from '../barChart/barChart'

const DashboardMainPage = () => {
    return (
        <div className='px-6 py-4'>
            <AdminHeader title="Dashboard" />
            <StatsSection />
            
            <div className='md:flex items-center justify-between p-2'>
                <div className='w-full md:w-[49%]'>
                    <LineChart />
                </div>
                <div className='w-full md:w-[49%]'>
                    <BarChart/>
                </div>
            </div>
        </div>
    )
}

export default DashboardMainPage