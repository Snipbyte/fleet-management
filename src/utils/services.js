export const getStatusColor = (status) => {
  switch (status) {
    case "Paid": return "bg-paidStatus text-green-800";
    case "In Progress": return "bg-inProgressStatus text-yellow-800";
    case "Pending": return "bg-pendingStatus text-purple-800";
    case "Rejected": return "bg-rejectedStatus text-red-800";
    case "Approved": return "bg-approvedStatus text-blue-800";
    default: return "bg-gray-100 text-gray-600";
  }
};