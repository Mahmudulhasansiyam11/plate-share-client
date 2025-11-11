import React from "react";
import { FaUsers, FaHandsHelping, FaLeaf, FaHeart } from "react-icons/fa";

const OurMission = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUsers className="text-4xl text-green-600 mb-3" />,
      label: "Active Members",
      value: "12,500+",
      color: "from-green-100 to-emerald-200",
    },
    {
      id: 2,
      icon: <FaHandsHelping className="text-4xl text-amber-500 mb-3" />,
      label: "Meals Donated",
      value: "45,000+",
      color: "from-amber-100 to-orange-200",
    },
    {
      id: 3,
      icon: <FaLeaf className="text-4xl text-lime-600 mb-3" />,
      label: "Food Saved (kg)",
      value: "9,200+",
      color: "from-lime-100 to-green-200",
    },
    {
      id: 4,
      icon: <FaHeart className="text-4xl text-pink-500 mb-3" />,
      label: "Smiles Shared",
      value: "30,000+",
      color: "from-pink-100 to-rose-200",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-amber-50 via-lime-50 to-emerald-100 overflow-hidden">
      {/* Background Orbs without animation */}
      <div className="absolute -top-24 left-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl font-extrabold text-emerald-800 drop-shadow-sm">
          🌍 Our Mission
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold text-emerald-700">FoodShare</span>, our mission is to
          fight hunger, reduce waste, and build stronger communities.  
          Every meal shared brings us one step closer to a world where no food is wasted and no one goes hungry.
        </p>
        <div className="mt-5 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      {/* Stats Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`bg-gradient-to-br ${stat.color} p-8 rounded-3xl shadow-xl text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
          >
            <div className="flex flex-col items-center">
              {stat.icon}
              <h3 className="text-4xl font-extrabold text-emerald-800 mb-1">{stat.value}</h3>
              <p className="text-gray-700 text-lg font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

       {/* Floating Decorative Emojis */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">🥦</div>
      <div className="absolute bottom-16 right-16 text-6xl opacity-20 animate-pulse">🍲</div>
      <div className="absolute top-1/2 left-1/4 text-5xl opacity-20 animate-spin-slow">🥖</div>
    </section>
  );
};

export default OurMission;
