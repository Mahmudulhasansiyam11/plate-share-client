import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { FaTrash, FaMapMarkerAlt, FaPhone, FaUtensils } from "react-icons/fa";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [userFoodRequest, setUserFoodRequest] = useState([]);

  // Load user requests
  useEffect(() => {
    document.title = "My Food Requests - PlateShare";
    if (user?.email) {
      fetch(`http://localhost:3000/requests?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setUserFoodRequest(data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-green-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-green-700 mb-16 text-center drop-shadow-lg">
          My Food Requests
        </h1>

        {userFoodRequest.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No food requests found 🍽️
          </p>
        ) : (
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {userFoodRequest.map((req) => (
              <div
                key={req._id}
                className="relative group overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-100 transform hover:scale-105 transition-transform duration-500"
              >
                {/* Gradient Header */}
                <div className="h-24 bg-gradient-to-r from-green-400 to-yellow-400 rounded-t-3xl flex items-center justify-center relative">
                  <span className="text-white font-bold text-xl drop-shadow-md">
                    {req.food_name}
                  </span>

                  {/* Status Badge */}
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full text-white shadow-lg ${
                      req.food_status === "pending"
                        ? "bg-yellow-500"
                        : req.food_status === "accepted"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {req.food_status.toUpperCase()}
                  </span>
                </div>

                {/* Donator Image */}
                <div className="flex justify-center -mt-12">
                  <img
                    src={req.donator_image}
                    alt={req.donator_name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>

                {/* Info Section */}
                <div className="p-6 space-y-3">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">
                      {req.donator_name}
                    </p>
                    <p className="text-gray-500 text-sm">{req.donator_email}</p>
                  </div>

                  <div className="space-y-1 text-gray-700">
                    <p className="flex items-center gap-2">
                      <FaUtensils className="text-yellow-400" /> Reason: {req.reason}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-green-400" /> Location: {req.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaPhone className="text-blue-400" /> Contact: {req.contact}
                    </p>
                  </div>

                
                </div>

                {/* Hover Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 via-green-200 to-green-300 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFoodRequest;
