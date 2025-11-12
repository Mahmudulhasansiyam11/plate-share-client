import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    document.title = "Add Food - PlateShare";
  }, []);

  const handleAddFood = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !foodName ||
      !foodImage ||
      !foodQuantity ||
      !pickupLocation ||
      !expireDate
    ) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const foodData = {
      food_name: foodName,
      food_image: foodImage,
      food_quantity: `Serves ${foodQuantity} people`,
      quantity_number: parseInt(foodQuantity), 
      pickup_location: pickupLocation,
      expire_date: expireDate,
      additional_notes: notes,
      donator_name: user.displayName,
      donator_email: user.email,
      donator_image: user.photoURL || "",
      food_status: "Available",
    };

    fetch('https://plate-share-api-server.vercel.app/foods', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(foodData),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        navigate("/availableFoods");
         Swal.fire({
                  title: "Add Food Successfully",
                  icon: "success",
                  draggable: true,
                });
    })
    .catch(error => {
        console.log(error);  
    })

    console.log(foodData);
    // toast.success("Food added successfully!");
    
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative bg-[linear-gradient(135deg,#FFEDBC,#FFD3B6,#FFAAA5)] px-4 py-4">
      {/* circle */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-orange-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      {/* Card */}
      <div className="relative w-full max-w-xl bg-white/50 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 md:p-10 transition-transform transform hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6 drop-shadow-sm">
          Add Food
        </h2>

        <form className="space-y-4" onSubmit={handleAddFood}>
          {/* Food Name */}
          <div>
            <label className="label text-gray-700 font-medium">
              Food Name *
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="e.g., Chicken Biryani"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              required
            />
          </div>

          {/* Food Image URL */}
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
            <label className="label text-gray-700 font-medium">
              Pickup Location *
            </label>
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
            <label className="label text-gray-700 font-medium">
              Expire Date *
            </label>
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
            <label className="label text-gray-700 font-medium">
              Additional Notes
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Any extra info..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

          {/* Donator Info */}
          <div className="text-sm text-gray-600 bg-white/30 p-3 rounded-lg border border-white/20">
            <p>
              <strong>Donator:</strong> {user.displayName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-green-500 hover:bg-green-600 text-white w-full mt-4 transition-transform transform hover:scale-105"
          >
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
