import React from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../../Components/FoodCard/FoodCard";

const AvailableFoods = () => {
  const foodData = useLoaderData() || [];
  console.log(foodData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-green-100 relative overflow-hidden py-16 px-6">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-green-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>

      <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 p-8 md:p-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-green-700 mb-4 drop-shadow-sm">
            🥗 Available Foods
          </h1>
          <p className="text-gray-700 text-lg font-medium max-w-2xl mx-auto">
            Discover freshly cooked meals shared by the community. Let’s reduce food waste together and spread kindness through sharing. 💚
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.isArray(foodData) && foodData.length > 0 ? (
            foodData.map((food) => <FoodCard key={food._id} food={food} />)
          ) : (
            <p className="text-center text-gray-600 text-lg col-span-full">
              No available food items right now 🍽️
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
