import React from "react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 py-20 bg-gradient-to-br from-amber-100 via-orange-100 to-green-100 overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-ping"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-800 drop-shadow-md leading-tight">
          Share Food, <span className="text-orange-600">Spread Happiness 🍲</span>
        </h1>

        <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Join our mission to reduce food waste and support communities in need.  
          Donate surplus food or request meals with just a click — because every meal counts.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        
          <Link
            to="/availableFoods"
            className="px-6 sm:px-8 py-3 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            🔍 Search Food
          </Link>
        </div>
      </div>

      {/* Floating Emojis */}
      <div className="absolute top-10 left-10 text-5xl opacity-30 animate-bounce">🥗</div>
      <div className="absolute bottom-10 right-12 text-6xl opacity-30 animate-pulse">🍛</div>
      <div className="absolute top-1/2 left-1/4 text-5xl opacity-20 animate-spin-slow">🍞</div>
    </section>
  );
};

export default HeroSection;
