"use client";

export default function VehicleSelectionCard() {
  return (
    <div className="w-full flex flex-col md:flex-row mx-auto border rounded-xl overflow-hidden bg-white border-gray-200 mb-6">
      {/* Left Image Section */}
      <div className="w-full lg:w-[65%] lg:border-r border-r-slate-200 p-4">
        <div className="w-full h-[200px]">
          <img src="/images/png/placeholder.png" className="w-full h-full" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 mt-4 text-sm text-gray-700 mb-3">
          <div className="flex items-center gap-2">
            <img src="/images/png/achivement.png" className="w-6 h-6" />
            <p className="text-base">Meet &amp; Greet included</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/png/cancel.png" className="w-6 h-6" />
            <p className="text-base">Free cancellation</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/png/clock.png" className="w-6 h-6" />
            <p className="text-base">Free Waiting time</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/png/safe.png" className="w-6 h-6" />
            <p className="text-base">Safe and secure travel</p>
          </div>
        </div>

        {/* Show more info */}
        <a href="/" className="underline top-0 relative">
          Show more information
        </a>

      </div>

      {/* Right Section */}
      <div className="flex-1 w-full lg:w-[30%] flex flex-col p-4 gap-3">
        {/* Title + Subtitle */}
        <h2 className="text-lg font-semibold">Business Class</h2>
        <p className="text-sm text-gray-600 mt-1">
          Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
        </p>

        {/* Passengers + Luggage */}
        <div className="flex items-center flex-wrap gap-6 mt-3 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <img src="/images/png/users.png" className="w-6 h-6" />
            <p>Passengers: 4</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/png/lagguage.png" className="w-6 h-6" />
            <p>Luggage: 1</p>
          </div>
        </div>
        {/* Price + Select button */}
        <div className="w-full flex items-center justify-between mt-2">
          <div>
            <p className="text-4xl font-semibold mb-2">$125.25</p>
            <p className="text-xs text-gray-500">
              All prices include VAT, fees &amp; tip.
            </p>
          </div>
        </div>
        <button className="bg-black mt-2 text-white text-center rounded-xl px-6 py-3 font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition">
          <p>Select</p>
          <span>↗</span>
        </button>
      </div>
    </div>
  );
}

