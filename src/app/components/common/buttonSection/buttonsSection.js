import React from 'react'
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa'

export default function ButtonsSection({className, continueWithFacebook,continueWithApple, continueWithGoogle}) {
  return (
    <div className={className}>
      {/* OR Divider */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-500 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Social Logins */}
      <div className="space-y-3">
        <button onClick={continueWithGoogle} className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-md hover:bg-gray-50">
          <FaGoogle className="text-red-500" /> Sign in with Google
        </button>

        <button onClick={continueWithFacebook} className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
          <FaFacebookF /> Continue with Facebook
        </button>

        <button onClick={continueWithApple} className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-md hover:bg-gray-800">
          <FaApple /> Continue with Apple
        </button>
      </div>
    </div>
  )
}
