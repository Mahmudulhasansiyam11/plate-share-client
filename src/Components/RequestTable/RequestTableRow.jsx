import React from "react";

const RequestTableRow = ({ req }) => {
  const status = (s) => {
    const v = s?.toLowerCase() ?? "";
    if (v === "pending") return "bg-yellow-100 text-yellow-700";
    if (v === "accepted") return "bg-green-100 text-green-700";
    if (v === "rejected") return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <tr className="hover:bg-gray-50 transition-all duration-200">
      {/* Donator */}
      <td className="px-6 py-4 flex items-center gap-3">
        <img
          src={req.donator_image}
          alt={req.donator_name}
          className="w-10 h-10 rounded-full border-2 border-indigo-200 shadow-sm object-cover"
        />
        <div>
          <div className="font-medium text-gray-900">{req.donator_name}</div>
          <div className="text-xs text-gray-500">{req.donator_email}</div>
        </div>
      </td>

      {/* Email */}
      <td className="px-6 py-4 align-middle">
        <div className="text-sm text-gray-700">{req.contact}</div>
      </td>

      {/* Location */}
      <td className="px-6 py-4 align-middle">
        <div className="text-sm text-gray-700">{req.location}</div>
      </td>

      {/* Food Name */}
      <td className="px-6 py-4 align-middle">
        <div className="text-sm font-medium text-gray-900">{req.food_name}</div>
        {req.reason && (
          <div className="text-xs text-gray-500 mt-1">Reason: {req.reason}</div>
        )}
      </td>

      {/* Status */}
      <td className="px-6 py-4 align-middle">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status(req.food_status)}`}>
          {req.food_status}
        </span>
      </td>

      {/* Action Buttons */}
      <td className="px-6 py-4 flex gap-2 justify-center align-middle">
        <button
          className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 shadow transition"
          onClick={() => console.log("Accepted:", req._id)}
          aria-label={`Accept request ${req._id}`}
        >
          Accept
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 shadow transition"
          onClick={() => console.log("Rejected:", req._id)}
          aria-label={`Reject request ${req._id}`}
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default RequestTableRow;
