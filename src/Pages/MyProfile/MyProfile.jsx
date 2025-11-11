import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { Link } from "react-router";
import userImg from "../../assets/user.png";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Profile - PlateShare";
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-[linear-gradient(135deg,#FFEDBC,#FFD3B6,#FFAAA5)]"
    >
      {/* Profile Card */}
      <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl relative rounded-3xl shadow-2xl overflow-hidden bg-white/30 backdrop-blur-md border border-white/20">
        
        {/* Header Decorative Gradient */}
        <div className="h-32 bg-[linear-gradient(90deg,#FF6B6B,#FFD93D)]"></div>

        {/* Profile Image */}
        <div className="flex flex-col items-center -mt-16">
          <div className="w-32 h-32 rounded-full ring-4 ring-green-400 ring-offset-4 ring-offset-white overflow-hidden shadow-lg">
            <img
              src={user?.photoURL || userImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-900 drop-shadow-sm">
            {user.displayName}
          </h2>
          <p className="text-gray-700 text-sm md:text-base mt-1">
            {user.email}
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="my-6 mx-8 border-t border-dashed border-gray-300"></div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pb-8 px-6">
          <Link
            to="/updateProfile"
            className="btn w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold tracking-wide rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Update Profile
          </Link>
          <Link
            to="/"
            className="btn w-full sm:w-auto bg-white/30 hover:bg-white/50 text-gray-900 font-semibold tracking-wide rounded-full shadow-md border border-gray-200 transition-transform transform hover:scale-105"
          >
            Back To Home
          </Link>
        </div>

        {/* Footer Decorative Gradient Bar */}
        <div className="h-2 bg-[linear-gradient(90deg,#FF6B6B,#FFD93D)] w-full absolute bottom-0 left-0"></div>
      </div>
    </div>
  );
};

export default MyProfile;
