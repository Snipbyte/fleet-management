"use client";
import React, { useState } from "react";
import Input from "../../common/input/input";
import Dropdowns from "../../common/dropdowns/dropdowns"

export default function NotificationSchedulerMainPage() {
  const [customer, setCustomer] = useState("John Smith");
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');


  return (
    <div className="bg-gray-50 p-4">
      <div>
        {/* <img src={""} /> */}
        {/* add back image  */}
        <h1 className="mb-4 font-semibold text-lg">Send Notification</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6rounded-lg gap-4">
        {/* Left Section */}
        <div className="md:col-span-2 rounded-2xl bg-white p-4">
          {/* Audience Section */}
          <div className="">
            <h3 className="text-base font-medium text-gray-800 mb-3">
              Select Audience
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="text"
                label={"Notification Title"}
              />

              <Dropdowns value={"Specific Customer"} options={["Specific Customer", "All Customer"]} />
              <Dropdowns value={"John Smith"} options={["Specific Customer", "All Customer"]} />
              <Dropdowns value={"Upcoming"} options={["Specific Customer", "All Customer"]} />
            </div>
          </div>

          {/* Notification Content */}
          <div className="mt-6">
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              Notification Content
            </h3>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message that you want to notify your audience"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm h-32 resize-none"
            />
            <p className="text-xs text-gray-500 text-right mt-1">
              {message.length}/1000
            </p>
          </div>

          {/* Schedule Options */}
          <div className="mt-6">
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              Schedule Options
            </h3>
            <div className="flex items-center gap-6 mb-4">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="radio" name="schedule" defaultChecked /> Send Now
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="radio" name="schedule" className="text-black" /> Schedule For Later
              </label>
            </div>

            <div className="flex gap-3">
              <Input label={"22/08/25"} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              <Input label={"08:25 PM"} type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>

            <button className="bg-black text-white text-sm font-medium px-6 py-4 rounded-xl">
              Schedule
            </button>
          </div>
        </div>

        {/* Right Section - Live Preview */}
        <div className="bg-white h-max rounded-2xl p-4">
          <h3 className="font-semibold text-gray-800 mb-3">
            Live Preview
          </h3>
          <div className="text-sm">
            <p className="font-medium">Booking Reminder</p>
            <p className="text-gray-600 my-3">Message Preview:</p>
            <div className="bg-activeBeige border border-borderColor rounded-md p-3 mt-1 text-gray-800 text-base">
              {message
                ? message
                : `Your ride is scheduled at Thu, Oct 06, 2022 & 6:15pm.`}
            </div>
            <p className="text-gray-600 mt-3">Audience:</p>
            <p className="text-gray-900  mt-1">{customer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
