import React from "react";

export default function ParticipantCard({ role, name, onNotify, onDetails }) {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <img
          src={`/images/jpg/image.png`}
          alt={name}
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="text-xs text-gray-500">{role}</p>
          <p className="text-sm font-medium">{name}</p>
        </div>
      </div>
      <div className="flex gap-2">
        {onDetails && (
          <div
            onClick={onDetails}
            className="px-3 py-2.5 text-[14px] bg-gray-100 cursor-pointer flex items-center gap-2 rounded-lg hover:bg-gray-200"
          >
            <img src={"/images/png/user.png"} className="w-5 h-5 object-contain" />
            <p>Details</p>
          </div>
        )}
        <div
          onClick={onNotify}
          className="px-3 py-2.5 text-[14px] bg-gray-100 cursor-pointer flex items-center gap-2 rounded-lg hover:bg-gray-200"
        >
          <img src={"/images/png/send.png"} className="w-5 h-5 object-contain" />
          <p>Notify</p>
        </div>
      </div>
    </div>
  );
}
