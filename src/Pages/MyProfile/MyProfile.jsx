import React, { use, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { Link } from "react-router";
import userImg from "../../assets/user.png"



const MyProfile = () => {
  const { user } = use(AuthContext);
      // console.log(user);
      console.log(user.photoURL);

  useEffect(() => {
        document.title = "Profile";
      }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      {/* Card Container */}
      <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
        <div className="relative bg-gray-800 bg-opacity-90 rounded-3xl shadow-2xl overflow-hidden border border-gray-700 backdrop-blur-md">
          {/* Header background image */}
          <div className="h-32 "></div>

          {/* Profile Image */}
          <div className="flex flex-col items-center -mt-16">
            <div className="avatar">
              <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                {user?.photoURL == null ? (
                  <img src={userImg} alt="user" />
                ) : (
                  <img src={user.photoURL} alt="user" />
                )}
                {/* {user?.photoURL && (
                  <img src={user.photoURL} alt="user" />
                )} */}
              </div>
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-wide">
              {user.displayName}
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-1">
              {user.email}
            </p>
          </div>

          {/* Divider */}
          <div className="divider mx-8 my-4 before:bg-gray-700 after:bg-gray-700"></div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pb-8 px-6">
            <Link
              to="/updateProfile"
              className="btn btn-primary w-full sm:w-auto px-8 text-white font-semibold tracking-wide transition-transform transform hover:scale-105"
            >
              Update Profile
            </Link>
            <Link
              to="/"
              className="btn btn-secondary w-full sm:w-auto px-8 font-semibold btn-outline tracking-wide transition-transform transform hover:scale-105"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

