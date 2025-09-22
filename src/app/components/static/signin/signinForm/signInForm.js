"use client"
import ButtonsSection from '../../../common/buttonSection/buttonsSection';
import Checkbox from '../../../common/checkbox/checkbox';
import Input from '../../../common/input/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/ride-booking")
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className='flex flex-col items-center justify-center lg:mb-16'>
          <h1 className='text-[44px]'>Sign in</h1>
          <p className='text-[#626262]'>Access your bookings, trip history, and account settings.</p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Email" type="email" />
          <Input label="Password" type={!showPassword ? "password" : "text"} icon={<img src={showPassword ? '/images/png/eye-open.png' : '/images/png/eye-close.png'} className='w-5' onClick={() => setShowPassword(!showPassword)} />} />
          {/* Terms */}
          <div className="flex items-center justify-between">
            <Checkbox
              label="Remember me"
              checked={termsAccepted}
              onChange={setTermsAccepted}
            />
            <Link href={"/reset-password"}>Forgot your password?</Link>
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800"
          >
            Sign in ↗
          </button>
        </form>

        {/* OR Divider */}
        <ButtonsSection className="" />
        <div className='text-center'>
          <p>Not Signed up? <Link href='/sign-up'>Create an account</Link></p>
        </div>
      </div>
    </div>
  )
}
