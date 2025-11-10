import { FaMapMarkerAlt, FaClock, FaUtensils } from "react-icons/fa";

const FoodCard = ({ food }) => {
  const {
    food_name,
    food_image,
    food_quantity,
    pickup_location,
    expire_date,
    donator_name,
    donator_image,
  } = food;

  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-2xl overflow-hidden">
      <figure className="relative">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Available
        </div>
      </figure>

      <div className="card-body p-5">
        {/* Food Name */}
        <h2 className="card-title text-lg font-semibold text-gray-800 mb-2">
          {food_name}
        </h2>

        {/* Donator Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={donator_image}
            alt={donator_name}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <p className="text-sm font-medium text-gray-600">
            Donated by <span className="font-semibold">{donator_name}</span>
          </p>
        </div>

        {/* Info Section */}
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

        {/* Button */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-sm bg-green-500 hover:bg-green-600 text-white rounded-full px-4">
            Request Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
