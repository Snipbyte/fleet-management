"use client"
import Input from '@/app/components/common/input/input';
import React, { } from 'react'
import Header from '../../common/header/header';
import Footer from '../../common/footer/footer';

export default function ResetPasswordMainPage() {
  return (
    <>
      <Header />
      <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-md space-y-6">
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[44px]'>Reset Passsword</h1>
            <p className='text-[#626262] text-center mt-3'>Enter your registered email address, and we’ll send you a link to reset your password.</p>
          </div>
          {/* Form */}
          <form className="space-y-4">
            <Input label="Email" type="email" />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800"
            >
              Continue ↗
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
