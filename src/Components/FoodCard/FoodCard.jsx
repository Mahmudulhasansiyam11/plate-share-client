

import { FaMapMarkerAlt, FaClock, FaUtensils } from "react-icons/fa";
import { Link } from "react-router";

const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    food_quantity,
    pickup_location,
    expire_date,
    donator_name,
    donator_image,
    food_status,
  } = food;

  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden border border-gray-200">
      {/* Food Image */}
      <figure className="relative">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        {food_status}
        </div>
      </figure>

      {/* Content */}
      <div className="card-body p-5">
        {/* Food Name */}
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {food_name}
        </h2>

        {/* Donator Info */}
        <div className="flex items-center gap-3 mb-3 mt-1">
          <img
            src={donator_image}
            alt={donator_name}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <p className="text-sm text-gray-600">
            Donated by{" "}
            <span className="font-semibold text-green-700">
              {donator_name}
            </span>
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <FaUtensils className="text-green-600" />
            {food_quantity}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            {pickup_location}
          </p>
          <p className="flex items-center gap-2">
            <FaClock className="text-yellow-500" />
            Expires on: <span className="font-medium">{expire_date}</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="card-actions  justify-between items-center mt-5">
          <Link to={`/food/${_id}`}>
            <button className="btn btn-sm bg-green-500 hover:bg-green-600 text-white rounded-full px-4 shadow-md">
              View Details
            </button>
          </Link>

          {/* <button className="btn btn-sm btn-outline btn-success rounded-full">
            Request Food
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
