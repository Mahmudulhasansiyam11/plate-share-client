import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [manageFood, setManageFood] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    document.title = "Manage Foods - PlateShare";
    if (user?.email) {
      fetch(`http://localhost:3000/foods?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setManageFood(data));
    }
  }, [user?.email]);



    // Delete functionality
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/foods/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then(() => {
              navigate("/availableFoods");
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            })
            .catch((error) => console.error(error));
        }
      });
    };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
          🍲 My Donated Foods
          <span className="text-orange-500"> ({manageFood.length})</span>
        </h2>

        {manageFood.length === 0 ? (
          <div className="text-center text-gray-600 text-lg bg-white/70 backdrop-blur-md py-12 rounded-2xl shadow-md">
            You haven’t added any food donations yet.
          </div>
        ) : (
          <div className="space-y-8">
            {manageFood.map((food) => (
              <div
                key={food._id}
                className="relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 flex flex-col md:flex-row"
              >
                {/* Image Section */}
                <div className="md:w-1/3 w-full h-64 md:h-64 flex-shrink-0 overflow-hidden">
                  <img
                    src={food.food_image}
                    alt={food.food_name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 transform hover:scale-105"
                  />
                </div>

                {/* Info Section */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {food.food_name}
                    </h3>
                    <p className="text-gray-600 text-sm italic mb-4">
                      {food.additional_notes}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                      <p>
                        <span className="font-medium text-orange-600">
                          Quantity:
                        </span>{" "}
                        {food.food_quantity} ({food.quantity_number})
                      </p>
                      <p>
                        <span className="font-medium text-orange-600">
                          Pickup:
                        </span>{" "}
                        {food.pickup_location}
                      </p>
                      <p>
                        <span className="font-medium text-orange-600">
                          Expires On:
                        </span>{" "}
                        {food.expire_date}
                      </p>
                      <p>
                        <span className="font-medium text-orange-600">
                          Status:
                        </span>{" "}
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            food.food_status.toLowerCase() === "available"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {food.food_status}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Donator + Buttons */}
                  <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={food.donator_image}
                        alt={food.donator_name}
                        className="w-12 h-12 rounded-full border-2 border-orange-400"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {food.donator_name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {food.donator_email}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 flex-wrap">
                      <Link
                       to={`/update-food/${food._id}`}
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md transition"
                      >
                        ✏️ Update
                      </Link>

                      <button
                        onClick={() => handleDelete(food._id)}
                        className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-xl font-semibold shadow-md transition"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMyFoods;
