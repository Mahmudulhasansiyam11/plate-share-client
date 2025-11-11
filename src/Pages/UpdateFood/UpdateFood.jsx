import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
// import { useNavigate} from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";

const UpdateFood = () => {
  const foodData = useLoaderData(); // Loaded food data
//   const navigate = useNavigate();

  // State for form fields
  const [foodName, setFoodName] = useState(foodData.food_name);
  const [foodImage, setFoodImage] = useState(foodData.food_image);
  const [foodQuantity, setFoodQuantity] = useState(foodData.quantity_number); // numeric input now
  const [pickupLocation, setPickupLocation] = useState(foodData.pickup_location);
  const [expireDate, setExpireDate] = useState(foodData.expire_date);
  const [notes, setNotes] = useState(foodData.additional_notes);

  useEffect(() => {
    document.title = "Update Food";
  }, []);

  const handleUpdateFood = (e) => {
    e.preventDefault();

    if (!foodName || !foodImage || !foodQuantity || !pickupLocation || !expireDate) {
      toast.error("Please fill all required fields!");
      return;
    }

    const updatedFood = {
      food_name: foodName,
      food_image: foodImage,
      food_quantity: `Serves ${foodQuantity} people`,
      quantity_number: parseInt(foodQuantity),
      pickup_location: pickupLocation,
      expire_date: expireDate,
      additional_notes: notes,
      food_status: foodData.food_status, // Keep existing status
      donator_name: foodData.donator_name,
      donator_email: foodData.donator_email,
      donator_image: foodData.donator_image,
    };


     // update functionality
    fetch(`http://localhost:3000/foods/${foodData._id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFood),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })


    console.log(updatedFood);
    toast.success("Food updated successfully!");
    // navigate(`/food/${foodData._id}`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative bg-[linear-gradient(135deg,#FFEDBC,#FFD3B6,#FFAAA5)] px-4 py-10">
      {/* Decorative Circles */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 md:w-[448px] h-72 sm:h-96 md:h-[448px] bg-green-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 md:w-[448px] h-72 sm:h-96 md:h-[448px] bg-orange-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      {/* Form Card */}
      <div className="relative w-full max-w-xl bg-white/50 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 md:p-10 transition-transform transform hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6 drop-shadow-sm">
          Update Food
        </h2>

        <form className="space-y-4" onSubmit={handleUpdateFood}>
          {/* Food Name */}
          <div>
            <label className="label text-gray-700 font-medium">Food Name *</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="e.g., Chicken Biryani"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              required
            />
          </div>

          {/* Food Image */}
          <div>
            <label className="label text-gray-700 font-medium">
              Food Image URL * (Use imgbb)
            </label>
            <input
              type="url"
              className="input input-bordered w-full"
              placeholder="Paste your image URL here"
              value={foodImage}
              onChange={(e) => setFoodImage(e.target.value)}
              required
            />
          </div>

          {/* Food Quantity */}
          <div>
            <label className="label text-gray-700 font-medium">
              Food Quantity (Number of Servings) *
            </label>
            <input
              type="number"
              min="1"
              max="100"
              className="input input-bordered w-full"
              placeholder="Enter number of people, e.g., 2"
              value={foodQuantity}
              onChange={(e) => setFoodQuantity(e.target.value)}
              required
            />
          </div>

          {/* Pickup Location */}
          <div>
            <label className="label text-gray-700 font-medium">Pickup Location *</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter pickup location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              required
            />
          </div>

          {/* Expire Date */}
          <div>
            <label className="label text-gray-700 font-medium">Expire Date *</label>
            <input
              type="date"
              className="input input-bordered w-full"
              value={expireDate}
              onChange={(e) => setExpireDate(e.target.value)}
              required
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="label text-gray-700 font-medium">Additional Notes</label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Any extra info..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-green-500 hover:bg-green-600 text-white w-full mt-4 transition-transform transform hover:scale-105"
          >
            Update Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
