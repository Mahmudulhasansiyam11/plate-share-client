import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { Link } from "react-router";
import { FaUtensils, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Swal from "sweetalert2";

const FoodDetails = () => {
  const foodData = useLoaderData();
  console.log(foodData);
  const navigate = useNavigate();

  // delete functionality
  const handleDelete = () => {
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
        fetch(`http://localhost:3000/foods/${foodData._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate('/availableFoods');
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10 bg-[linear-gradient(135deg,#FFEDBC,#FFD3B6,#FFAAA5)] relative">
      {/* Decorative Circles */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 md:w-[448px] h-72 sm:h-96 md:h-[448px] bg-green-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 md:w-[448px] h-72 sm:h-96 md:h-[448px] bg-orange-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      {/* Card */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-3xl bg-white/50 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-6 sm:p-8 md:p-10 transition-transform transform hover:scale-[1.02]">
        {/* Food Image */}
        <div className="w-full h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
          <img
            src={foodData.food_image}
            alt={foodData.food_name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Food Info */}
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3">
          {foodData.food_name}
        </h2>
        <p className="text-gray-700 mb-3 text-sm sm:text-base">
          {foodData.additional_notes}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 mb-6">
          <p className="flex items-center gap-2 text-sm sm:text-base">
            <FaUtensils className="text-green-600" /> {foodData.food_quantity}
          </p>
          <p className="flex items-center gap-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-red-500" />{" "}
            {foodData.pickup_location}
          </p>
          <p className="flex items-center gap-2 text-sm sm:text-base">
            <FaClock className="text-yellow-500" /> Expires on:{" "}
            <span className="font-medium">{foodData.expire_date}</span>
          </p>
        </div>

        {/* Donator Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white/30 p-4 rounded-lg border border-white/20 mb-6">
          <img
            src={foodData.donator_image}
            alt={foodData.donator_name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gray-800">
              {foodData.donator_name}
            </p>
            <p className="text-gray-600 text-sm">{foodData.donator_email}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3">
          <button className="btn bg-green-500 hover:bg-green-600 text-white w-full md:w-auto transition-transform transform hover:scale-105">
            Request Food
          </button>
          <Link
            to={`/update-food/${foodData._id}`}
            className="btn bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto transition-transform transform hover:scale-105"
          >
            Update Food
          </Link>
          <button
            onClick={handleDelete}
            className="btn bg-red-500 hover:bg-red-600 text-white w-full md:w-auto transition-transform transform hover:scale-105"
          >
            Delete Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
