import React from "react";
import { Link } from "react-router";
import FoodCard from "../FoodCard/FoodCard";

const FeaturedFood = ({ highestQuantityFoodData }) => {
  console.log(highestQuantityFoodData);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-lime-50 to-emerald-100 py-20 overflow-hidden flex justify-center items-center">
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-0 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-ping"></div>
        <div className="absolute bottom-0 left-1/2 w-[35rem] h-[35rem] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 p-10 md:p-14 max-w-7xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-emerald-800 tracking-tight drop-shadow-sm">
            🌟 Featured Food Items
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our top donated meals — made with love and care. 
            These foods are fresh, delicious, and waiting for you 🍴
          </p>
          <div className="mt-4 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Food Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {Array.isArray(highestQuantityFoodData) && highestQuantityFoodData.length > 0 ? (
            highestQuantityFoodData.map((food) => (
              <div
                key={food._id}
                className="transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                <FoodCard food={food} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-xl">
                😔 No featured foods available right now — check back soon!
              </p>
            </div>
          )}
        </div>

        {/* Show All Button */}
        <div className="text-center mt-16">
          <Link
            to="/availableFoods"
            className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            🍽️ Show All Foods
          </Link>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 animate-bounce-slow text-5xl opacity-30">🥦</div>
      <div className="absolute bottom-10 right-20 animate-pulse text-6xl opacity-30">🍛</div>
      <div className="absolute top-1/2 left-5 animate-float text-5xl opacity-30">🥗</div>
    </section>
  );
};

export default FeaturedFood;
