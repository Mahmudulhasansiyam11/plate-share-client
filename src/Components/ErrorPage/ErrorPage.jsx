
import { Link } from "react-router";

const ErrorPage = () => {

  return (
    <div className="min-h-screen w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto flex flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,#111827,#1f2937,#000000)] text-white p-4 sm:p-6 md:p-8 rounded-2xl relative">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-widest">
        404
      </h1>

      <div className="bg-red-600 px-2 sm:px-3 text-xs sm:text-sm md:text-base rounded rotate-12 absolute top-20 sm:top-24 md:top-28 lg:top-32">
        Page Not Found
      </div>

      <p className="mt-10 text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold tracking-wide border border-red-500 rounded-full transition-transform transform hover:scale-110 hover:bg-red-600/20"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
