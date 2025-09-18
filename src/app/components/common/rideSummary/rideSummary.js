"use client"
import React, { useState } from 'react'
import VehicleHistory from '../vehicleHistory/vehicleHistory';
import SelectedVehicleCard from '../selectedVehicleCard/selectedVehicleCard';

const RowItem = ({ distance, time }) => {
  return (
    <div className='w-full flex justify-between gap-2'>
      <div className=''>
        <h1 className='font-medium text-gray-600 text-sm'>Total Distance</h1>
        <p className='text-gray-900'>{distance}</p>
      </div>
      <div className=''>
        <h1 className='font-medium text-gray-600 text-sm'>Total Time</h1>
        <p className='text-gray-900'>{time}</p>
      </div>
    </div>
  )
}

export default function RideSummary() {
  // Sample data - in a real app this would come from props or state management
  const rideData = {
    from: {
      name: "Central Park",
      address: "59th to 110th St, New York, NY"
    },
    to: {
      name: "Empire State Building",
      address: "20 W 34th St, New York, NY 10001"
    },
    date: "October 15, 2023",
    time: "2:30 PM",
    distance: "4.2 miles",
    duration: "22 mins",
    price: "$24.50",
    vehicle: "Premium Sedan",
    mapImage: "https://maps.geoapify.com/v1/staticmap?style=klokantech-basic&width=600&height=300&zoom=13&center=lonlat:-73.9780,40.7549&marker=lonlat:-73.9710,40.7810;color:%23ff0000;size:medium;text:A&marker=lonlat:-73.9850,40.7490;color:%23ff0000;size:medium;text:B&apiKey=YOUR_API_KEY"
  };

  return (
    <div className='w-full'>
      <div className='border border-gray-200 p-4 rounded-md'>
        <div className='w-full flex items-center justify-between mb-6'>
          <h1 className='font-medium text-black'>Ride Summary</h1>
          <a href='/' className='underline'>Edit</a>
        </div>
        {/* Route visualization */}
        <div className="relative mb-6">
          <div className="flex items-center mb-4 relative gap-2">
            <div
              className="w-10 h-10 rounded-full bg-[url('/images/png/a.png')] bg-cover bg-center flex items-center justify-center z-10"
            >
              <p className="text-white text-base relative bottom-0.5">A</p>
            </div>
            <h3 className="text-sm text-gray-900">{rideData.from.name}</h3>
          </div>
          <div
            className="w-10 flex items-center justify-center mb-4"
          >
            <img src='/images/png/lines.png' className='h-16 object-contain' />
          </div>
          <div className="flex items-center gap-2 mb-6 relative">
            <div
              className="w-10 h-10 rounded-full bg-[url('/images/png/a.png')] bg-cover bg-center flex items-center justify-center z-10"
            >
              <p className="text-white text-base relative bottom-0.5">B</p>
            </div>
            <h3 className="text-sm text-gray-900">{rideData.from.name}</h3>
          </div>

          <div className="flex items-center gap-2 mb-6 relative">
            <div
              className="w-10 h-10 rounded-full bg-[url('/images/png/b.png')] bg-cover bg-center flex items-center justify-center z-10"
            >
              <img src='/images/png/clock-white.png' className='w-5 h-5' />
            </div>
            <h3 className="text-sm text-gray-900">{rideData.from.name}</h3>
          </div>

          <div className="flex items-center gap-2 mb-6 relative">
            <div
              className="w-10 h-10 rounded-full bg-[url('/images/png/b.png')] bg-cover bg-center flex items-center justify-center z-10"
            >
              <img src='/images/png/cal-white.png' className='w-5 h-5' />
            </div>
            <h3 className="text-gray-900 text-sm">{"Thu, Oct 06, 2022"}</h3>
          </div>
        </div>
        {/* Map Preview */}
        <div className="rounded-xl overflow-hidden mb-6 border border-gray-200">
          <img
            src={"/images/png/map.png"}
            alt="Route map"
            className="w-full h-48 object-cover"
          />
        </div>
        {/* Ride Details */}
        <div className="mb-2">
          <RowItem
            distance={"311km/194miles"}
            time={"3h 43m"}
          />
        </div>
        <SelectedVehicleCard />
      </div>
      <VehicleHistory points={["+100.000 passengers transported", "Instant confirmation", "All-inclusive pricing", "Secure Payment by credit card, debit card or Paypal"]} />
      {/* Total Price */}
      <div className="border border-gray-200 mt-2 p-4 rounded-lg">
        <div className='flex items-center justify-between'>
          <p className="text-gray-600 text-sm">Selecte Vehicle</p>
          <p className="text-sm">$4545</p>
        </div>
        <div className='flex items-center justify-between pb-4'>
          <p className="text-gray-600 text-sm">Extra Options</p>
          <p className="text-sm">$546</p>
        </div>
        <div className='flex items-center justify-between border-t border-t-slate-200 pt-4'>
          <p className="text-gray-600 text-sm">Total</p>
          <p className="text-sm">$546</p>
        </div>
      </div>
    </div>
  )
}