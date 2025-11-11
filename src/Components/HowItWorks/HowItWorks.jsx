import React from "react";
import { FaUtensils, FaSearch, FaHandHoldingHeart } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Post Food 🍱",
      icon: <FaUtensils className="text-4xl text-green-600 mb-4" />,
      description:
        "Have extra food? Simply post it with details like quantity, freshness, and pickup location. It’s quick, simple, and meaningful.",
      bg: "from-green-100 to-emerald-200",
    },
    {
      id: 2,
      title: "Find Food 🔍",
      icon: <FaSearch className="text-4xl text-amber-500 mb-4" />,
      description:
        "Explore available meals shared by others in your community. Filter by location or type to find what fits your need.",
      bg: "from-amber-100 to-orange-200",
    },
    {
      id: 3,
      title: "Collect Food ❤️",
      icon: <FaHandHoldingHeart className="text-4xl text-pink-500 mb-4" />,
      description:
        "Once matched, simply contact the donor and collect your food with a smile. Together, we make sure no meal goes to waste.",
      bg: "from-pink-100 to-rose-200",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-amber-50 via-lime-50 to-emerald-100 overflow-hidden">
      {/* Decorative Orbs without animation */}
      <div className="absolute -top-20 left-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl font-extrabold text-emerald-800 drop-shadow-sm">
          🥗 How It Works
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          A simple and caring 3-step process to share food, reduce waste, and feed communities.
        </p>
        <div className="mt-4 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      {/* Steps Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`bg-gradient-to-br ${step.bg} p-10 rounded-3xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-center`}
          >
            <div className="flex flex-col items-center">
              {step.icon}
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">{step.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

          {/* Floating Emojis */}
      <div className="absolute top-10 left-10 text-5xl opacity-20 animate-bounce">🍲</div>
      <div className="absolute bottom-16 right-16 text-6xl opacity-20 animate-pulse">🍞</div>
      <div className="absolute top-1/2 left-1/3 text-5xl opacity-20 animate-spin-slow">🥬</div>
    </section>
  );
};

export default HowItWorks;
