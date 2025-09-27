export const getStatusColor = (status) => {
  switch (status) {
    // Payment statuses
    case "Paid": return "bg-green-100 text-green-800";
    case "Pending": return "bg-yellow-100 text-yellow-800";
    case "Refunded": return "bg-purple-100 text-purple-800";

    // Trip statuses
    case "Completed": return "bg-blue-100 text-blue-800";
    case "Ongoing": return "bg-orange-100 text-orange-800";
    case "Scheduled": return "bg-teal-100 text-teal-800";
    case "Cancelled": return "bg-red-100 text-red-800";

    // Payout statuses
    case "Approved": return "bg-green-100 text-green-800";
    case "Rejected": return "bg-red-100 text-red-800";

    // Default fallback
    default: return "bg-gray-100 text-gray-600";
  }
};

export const highlightText = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="bg-red-300 text-black rounded px-1">{part}</span>
    ) : (
      part
    )
  );
};

