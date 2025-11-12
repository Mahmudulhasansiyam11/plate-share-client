// import React from "react";

// const RequestTableRow = ({ req }) => {
//   const status = (s) => {
//     const v = s?.toLowerCase() ?? "";
//     if (v === "pending") return "bg-yellow-100 text-yellow-700";
//     if (v === "accepted") return "bg-green-100 text-green-700";
//     if (v === "rejected") return "bg-red-100 text-red-700";
//     return "bg-gray-100 text-gray-700";
//   };

//   return (
//     <tr className="hover:bg-gray-50 transition-all duration-200">
//       {/* Donator */}
//       <td className="px-6 py-4 flex items-center gap-3">
//         <img
//           src={req.donator_image}
//           alt={req.donator_name}
//           className="w-10 h-10 rounded-full border-2 border-indigo-200 shadow-sm object-cover"
//         />
//         <div>
//           <div className="font-medium text-gray-900">{req.donator_name}</div>
//           <div className="text-xs text-gray-500">{req.donator_email}</div>
//         </div>
//       </td>

//       {/* Email */}
//       <td className="px-6 py-4 align-middle">
//         <div className="text-sm text-gray-700">{req.contact}</div>
//       </td>

//       {/* Location */}
//       <td className="px-6 py-4 align-middle">
//         <div className="text-sm text-gray-700">{req.location}</div>
//       </td>

//       {/* Food Name */}
//       <td className="px-6 py-4 align-middle">
//         <div className="text-sm font-medium text-gray-900">{req.food_name}</div>
//         {req.reason && (
//           <div className="text-xs text-gray-500 mt-1">Reason: {req.reason}</div>
//         )}
//       </td>

//       {/* Status */}
//       <td className="px-6 py-4 align-middle">
//         <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status(req.food_status)}`}>
//           {req.food_status}
//         </span>
//       </td>

//       {/* Action Buttons */}
//       <td className="px-6 py-4 flex gap-2 justify-center align-middle">
//         <button
//           className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 shadow transition"
//           onClick={() => console.log("Accepted:", req._id)}
//           aria-label={`Accept request ${req._id}`}
//         >
//           Accept
//         </button>
//         <button
//           className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 shadow transition"
//           onClick={() => console.log("Rejected:", req._id)}
//           aria-label={`Reject request ${req._id}`}
//         >
//           Reject
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default RequestTableRow;


import { useState } from "react";
import Swal from "sweetalert2";

const RequestTableRow = ({ req }) => {
  const [status, setStatus] = useState(req.food_status);

  // Handle Accept
  const handleAccept = async () => {
    try {
      // Update request status to "accepted"
      const reqRes = await fetch(`https://plate-share-api-server.vercel.app/requests/${req._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ food_status: "accepted" }),
      });

      // Update related food to "donated"
      const foodRes = await fetch(`https://plate-share-api-server.vercel.app/foods/${req.food_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ food_status: "donated" }),
      });

      if (reqRes.ok && foodRes.ok) {
        setStatus("accepted");
        Swal.fire("Accepted!", "The request has been accepted successfully.", "success");
      } else {
        throw new Error("Failed to update both statuses");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Something went wrong while accepting.", "error");
    }
  };

  // Handle Reject
  const handleReject = async () => {
    try {
      const res = await fetch(`https://plate-share-api-server.vercel.app/requests/${req._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ food_status: "rejected" }),
      });

      if (res.ok) {
        setStatus("rejected");
        Swal.fire("Rejected!", "The request has been rejected.", "warning");
      } else {
        throw new Error("Failed to reject");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Something went wrong while rejecting.", "error");
    }
  };

  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="px-6 py-4 flex items-center gap-3">
        <img
          src={req.donator_image}
          alt={req.donator_name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{req.donator_name}</p>
          <p className="text-xs text-gray-500">{req.donator_email}</p>
        </div>
      </td>

      <td className="px-6 py-4">{req.contact}</td>
      <td className="px-6 py-4">{req.location}</td>
      <td className="px-6 py-4">{req.food_name}</td>

      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
            status === "accepted"
              ? "bg-green-500"
              : status === "rejected"
              ? "bg-red-500"
              : "bg-yellow-500"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="px-6 py-4 text-center space-x-2">
        <button
          onClick={handleAccept}
          className={`px-3 py-1 rounded-lg text-white ${
            status !== "pending"
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={status !== "pending"}
        >
          Accept
        </button>

        <button
          onClick={handleReject}
          className={`px-3 py-1 rounded-lg text-white ${
            status !== "pending"
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
          disabled={status !== "pending"}
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default RequestTableRow;
