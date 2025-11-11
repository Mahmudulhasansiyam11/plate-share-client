import React from "react";
import RequestTableRow from "./RequestTableRow";

const RequestTable = ({ requests }) => {
  if (!requests || requests.length === 0) {
    return (
      <div className="text-center text-gray-600 text-lg">
        {/* No request data available. */}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Food Request {requests.length}</h2>

      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-base">
            <tr>
              <th className="px-6 py-3">Donator</th>
              <th className="px-6 py-3">Contact</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Food Name</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {requests.map((req) => (
              <RequestTableRow key={req._id} req={req} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestTable;

