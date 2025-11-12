import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-green-700 via-lime-700 to-emerald-800 text-white py-14 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-lime-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Section */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-bold mb-3 text-amber-300">PlateShare 🍴</h2>
            <p className="text-sm text-gray-100 leading-relaxed">
              Share your surplus meals and make a difference!  
              PlateShare connects donors and receivers to reduce food waste and spread kindness across the community.  
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-amber-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="availableFoods"
                  className="hover:text-amber-300 transition-colors"
                >
                  Available Foods
                </Link>
              </li>
              <li>
                <Link
                  to="/addFood"
                  className="hover:text-amber-300 transition-colors"
                >
                  Add Food
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-amber-200">Community</h3>
            <ul className="space-y-2">
              <li className="hover:text-amber-300 transition-colors">
                
                  How It Works

              </li>
              <li className="hover:text-amber-300 transition-colors">
                 Success Stories
              </li>
              <li className="hover:text-amber-300 transition-colors">
                Become a Volunteer
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-amber-200">Stay Connected</h3>
            <p className="text-sm text-gray-100 mb-3">
              Join our community and spread kindness 💚
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-amber-300 hover:text-green-800 transition-all duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-amber-300 hover:text-green-800 transition-all duration-300"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-amber-300 hover:text-green-800 transition-all duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-amber-300 hover:text-green-800 transition-all duration-300"
              >
                <FaDiscord className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-100">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-amber-300 font-semibold">PlateShare</span>.  
            All rights reserved.
          </p>
          <p className="mt-2 text-gray-200 italic">
            “Together, we reduce waste, fight hunger, and share love — one plate at a time.” 🍛
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
