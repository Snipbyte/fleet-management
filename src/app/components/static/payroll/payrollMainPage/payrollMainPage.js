"use client";
import React, { useState, useRef, useEffect } from "react";


import EarningsByTrip from "../earningsByTrip/earningsByTrip"
import PayPeriod from "../payPeriod/payPeriod"
import PayrollDetails from "../payrollDetails/payrollDetails"
import Dispute from "../dispute/dispute"

const options = ["Earnings by Trip", "Pay Period", "Payroll Detail", "Dispute"];

export default function PayrollMainPage() {
  const [selected, setSelected] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({ width: "0px", left: "0px" });
  const tabRefs = useRef([]);

  const handleToggle = (index) => {
    setSelected(index);
  };

  useEffect(() => {
    if (tabRefs.current[selected]) {
      const el = tabRefs.current[selected];
      setSliderStyle({
        width: `${el.offsetWidth}px`,
        left: `${el.offsetLeft}px`,
      });
    }
  }, [selected]);

  const renderContent = () => {
    switch (selected) {
      case 0:
        return <EarningsByTrip />;
      case 1:
        return <PayPeriod />;
      case 2:
        return <PayrollDetails />;
      case 3:
        return <Dispute />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="font-bold text-lg">{options[selected]}</h1>
        <div className="relative w-full md:w-auto bg-white rounded-lg p-2 overflow-x-auto">
          <div className="flex relative w-full min-w-max">
            {options.map((option, index) => (
              <button
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                className={`relative z-10 px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${selected === index
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-800"
                  }`}
                onClick={() => handleToggle(index)}
              >
                {option}
              </button>
            ))}

            {/* Sliding background */}
            <div
              className="absolute top-0 bottom-0 z-0 bg-btnHover rounded-md transition-all duration-300 ease-in-out"
              style={sliderStyle}
            />
          </div>
        </div>
      </div>

      {/* Active Content */}
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
}
