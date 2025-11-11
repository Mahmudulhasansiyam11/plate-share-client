
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-[linear-gradient(135deg,#FFEDBC,#FFD3B6,#FFAAA5)] relative overflow-hidden px-6 py-12">
      
      
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-40"></div>

      {/* Content Card */}
      <div className="relative bg-white/60 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-10 md:p-14 max-w-lg w-full">
        {/* Emoji + Code */}
        <div className="text-8xl font-extrabold text-red-500 drop-shadow-md">404</div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          Page Not Found 🍽️
        </h2>

        <p className="text-gray-600 mt-4 leading-relaxed text-base md:text-lg">
          Oops! Looks like this page got eaten by a hungry foodie.  
          Try going back to the homepage and explore some delicious dishes instead!
        </p>

        {/* Back Home Button */}
        <Link
          to="/"
          className="mt-8 inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
        >
          🍴 Go Back Home
        </Link>
      </div>

      {/* Floating Emojis for Fun */}
      <div className="absolute top-16 left-10 text-5xl opacity-40">🥗</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-40">🍛</div>
      <div className="absolute top-1/3 right-1/3 text-4xl opacity-30">🍔</div>
    </div>
  );
};

export default ErrorPage;
