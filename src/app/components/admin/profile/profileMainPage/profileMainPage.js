import React from 'react'
import AdminHeader from "../../../common/adminHeader/adminHeader"
import PasswordInfoSection from "../passwordInfoSection/passwordInfoSection"
import ProfileInfoSection from "../profileInfoSection/profileInfoSection"

const ProfileMainPage = () => {
    return (
        <div className='px-6 py-4'>
            <AdminHeader title="Account Settings" />
            <div className='md:flex items-center justify-between'>
                <div className='w-full md:w-[49%]'>
                    <ProfileInfoSection />
                </div>
                <div className='w-full md:w-[49%]'>
                    <PasswordInfoSection />
                </div>
            </div>
        </div>
    )
}

export default ProfileMainPage