import React from "react";
// import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto bg-black text-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/*  About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
             PlateShare connects people to share food with those in need. Donate extra meals or request food easily through our platform. Together, we reduce waste, fight hunger, and build a caring community where every plate counts.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            
            <div className="flex flex-col items-start md:items-center lg:items-center">
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul>
              <li>
                <Link to="/" className="text-sm hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/allGames" className="text-sm hover:text-gray-400">
                  Games
                </Link>
              </li>
            </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-pink-400 transition-colors" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="text-2xl hover:text-indigo-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 PlateShare. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
