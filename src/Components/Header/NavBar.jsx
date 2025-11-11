import React, { useState, useContext } from "react";
import logo from "../../assets/logo.jpg";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FcMenu } from "react-icons/fc";
import userImg from "../../assets/user.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged Out Successfully"))
      .catch((error) => console.log(error.message));
  };

  // Main Links
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md font-medium transition-colors ${
            isActive ? "bg-white/20 text-white" : "text-white hover:bg-white/10"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/availableFoods"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md font-medium transition-colors ${
            isActive ? "bg-white/20 text-white" : "text-white hover:bg-white/10"
          }`
        }
      >
        Available Foods
      </NavLink>
    </>
  );

  // Dropdown Links
  const userLinks = (
    <>
      <Link
        to="/addFood"
        className="block px-4 py-2 rounded-md hover:bg-green-100 hover:text-green-800 transition-colors"
      >
        Add Food
      </Link>
      <Link
        to="/manageMyFoods"
        className="block px-4 py-2 rounded-md hover:bg-green-100 hover:text-green-800 transition-colors"
      >
        Manage My Foods
      </Link>
      <Link
        to="/myFoodRequest"
        className="block px-4 py-2 rounded-md hover:bg-green-100 hover:text-green-800 transition-colors"
      >
        My Food Request
      </Link>
       <Link
        to="/myProfile"
        className="block px-4 py-2 rounded-md hover:bg-green-100 hover:text-green-800 transition-colors"
      >
        My Profile
      </Link>
      <button
        onClick={handleLogOut}
        className="w-full text-left px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition-colors"
      >
        LogOut
      </button>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[linear-gradient(90deg,#FF6B6B,#FFD93D)] shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
              src={logo}
              alt="PlateShare"
            />
            <span className="text-white font-bold text-2xl drop-shadow-md">
              PlateShare
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-3">{links}</div>

            {user ? (
              <div className="relative">
                {/* Avatar Dropdown */}
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="cursor-pointer hover:scale-105 transition-transform"
                  >
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                      src={user.photoURL || userImg}
                      alt="Profile"
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-3 shadow-xl bg-white rounded-xl w-60 mt-2 border border-gray-200 text-gray-800"
                  >
                    {userLinks}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/auth/login"
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <FcMenu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-md shadow-lg px-4 pt-4 pb-6 animate-slideDown">
          <div className="flex flex-col gap-2">{links}</div>
          <div className="mt-4 flex flex-col gap-2">
            {user ? userLinks : (
              <>
                <Link
                  to="/auth/login"
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

