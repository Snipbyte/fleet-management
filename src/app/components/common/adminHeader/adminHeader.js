"use client";
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Button from '../button/button';

export default function AdminHeader({ title, showIcon, showButtons, buttonVisible = false }) {
  const params = usePathname();
  const [selected, setSelected] = useState(0);
  const router = useRouter();
  const options = [
    { label: "Trip Details", value: "tripdetails" },
    { label: "Payouts", value: "payout" },
  ];

  const handleToggle = (index) => {
    setSelected(index);
  };

  if (params === "/admin/payroll/trip-payout-details") {
    // No need to set showButtons here unless explicitly passed
  }

  return (
    <div className='flex w-full items-center justify-between'>
      <div className='flex items-center gap-2'>
        {showIcon && <img onClick={() => router.back()} src={"/images/png/arrow-back.png"} className='w-8 h-8 object-contain cursor-pointer' />}
        <h1 className='font-semibold text-lg'>{title}</h1>
      </div>
      {showButtons === true && (
        <div className="relative w-[20%] inline-flex bg-white rounded-lg p-2">
          <div className="flex relative w-full">
            {options.map((option, index) => (
              <button
                key={index}
                className={`relative w-full z-10 px-3 py-2.5 text-xs font-medium transition-colors duration-300 ${selected === index
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-800"
                  }`}
                onClick={() => handleToggle(index)}
              >
                {option.label}
              </button>
            ))}
            {/* Sliding background */}
            <div
              className="absolute inset-y-0 left-0 z-0 bg-btnHover rounded-md transition-all duration-300 ease-in-out"
              style={{
                width: `${100 / options.length}%`,
                transform: `translateX(${selected * 100}%)`,
              }}
            />
          </div>
        </div>
      )}
      {buttonVisible && <Button className='px-4 rounded-xl border-none'>Save Changes</Button>}
    </div>
  );
}
