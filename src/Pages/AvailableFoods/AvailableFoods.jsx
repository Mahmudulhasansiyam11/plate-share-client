// import React from 'react';
// import { useLoaderData } from 'react-router';
// import FoodCard from '../../Components/FoodCard/FoodCard';

// const AvailableFoods = () => {

//     const foodData = useLoaderData();
//     console.log(foodData);

//     return (
//         <div>
//            <div>
//             {
//                 foodData.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
//             }
//            </div>
//         </div>
//     );
// };

// export default AvailableFoods;

import React from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../../Components/FoodCard/FoodCard";

const AvailableFoods = () => {
  const foodData = useLoaderData();
  console.log(foodData);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/RgTfbGZ/food-bg.jpg')", // 🍛 Replace this with your own beautiful food background image
      }}
    >
      {/* Overlay for better text readability */}
      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-3 drop-shadow-lg">
            🥘 Available Foods
          </h1>
          <p className="text-gray-700 font-medium">
            Share and enjoy surplus meals from your community. Reduce waste, spread kindness. 💚
          </p>
        </div>

        {/* Food Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {foodData && foodData.length > 0 ? (
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
