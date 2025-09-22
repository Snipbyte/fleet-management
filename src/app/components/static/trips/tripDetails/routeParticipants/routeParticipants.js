import React from "react";
import ParticipantCard from "../../participantCard/participantCard";


export default function RouteParticipants({ pickup, dropoff, participants }) {
  return (
    <div className="bg-white rounded-xl p-4 flex-1">
      <h2 className="text-lg font-semibold mb-4">Route & Participants</h2>
      <div className="space-y-3 text-sm mb-4">
        <p>Pickup Location:</p>
        <p className="font-medium">{pickup}</p>
        <p>Dropoff Location:</p>
        <p className="font-medium">{dropoff}</p>
      </div>
      <div className="border-t border-t-borderColor pt-2">
        {participants.map((p, idx) => (
          <ParticipantCard
            key={idx}
            role={p.role}
            name={p.name}
            onNotify={() => alert(`Notify ${p.name}`)}
            onDetails={p.role === "Driver" ? () => alert(`Details of ${p.name}`) : null}
          />
        ))}
      </div>
    </div>
  );
}
