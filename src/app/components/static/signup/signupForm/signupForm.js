"use client"
import ButtonsSection from '../../../common/buttonSection/buttonsSection';
import Checkbox from '../../../common/checkbox/checkbox';
import Input from '../../../common/input/input';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { FiEye } from 'react-icons/fi';

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className='flex flex-col items-center justify-center lg:mb-16'>
          <h1 className='text-[44px]'>Sign up</h1>
          <p className='text-[#626262]'>Access your bookings, trip history, and account settings.</p>
        </div>
        {/* Form */}
        <form className="space-y-4">
          <Input label="Username" type="text" />
          <Input label="Email" type="email" />
          <Input label="Password" type={!showPassword ? "password" : "text"} icon={<img src={showPassword ? '/images/png/eye-open.png' : '/images/png/eye-close.png'} className='w-5' onClick={() => setShowPassword(!showPassword)} />} />
          <Input label="Confirm Password" type={!showConfirmPassword ? "password" : "text"} icon={<img src={showConfirmPassword ? '/images/png/eye-open.png' : '/images/png/eye-close.png'} className='w-5' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />} />
          <Input label="Phone Number" type="tel" />
          {/* Terms */}
          <div className="flex items-start space-x-2">
            <Checkbox />
            <label htmlFor="terms" className="text-sm text-gray-600">
              By checking this box, I confirm my information is accurate and
              agree to the Terms & Conditions.
            </label>
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800"
          >
            Create Account ↗
          </button>
        </form>

        {/* OR Divider */}
        <ButtonsSection className="" />
        <div className='text-center'>
          <p>Already a member? <Link href='/sign-in'>Login here</Link></p>
        </div>
      </div>
    </div>
  )
}
