import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUser, googleSignIn } =
    useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "Register - PlateShare";
  }, []);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!uppercaseRegex.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!lowercaseRegex.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    } else {
      setPasswordError("");
    }

    const photoRegex = /\.(jpeg|jpg|png|gif|bmp|webp)$/i;
    if (!photo) {
      setPhotoError("Photo URL is required");
      return;
    } else if (!photoRegex.test(photo)) {
      setPhotoError("Please provide a valid image URL (jpg, png, gif, etc.)");
      return;
    } else {
      setPhotoError("");
    }

    createUser(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });

            const newUser = {
              name: result.user.displayName,
              email: result.user.email,
              image: result.user.photoURL,
            };

            // create user in the database
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("data after user save", data);
              });

            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(result.user);
          });
      })
      .catch((error) => console.log(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);

        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        // create user in the database
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data after user save", data);
          });

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => console.log(error.message));
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[linear-gradient(135deg,#FFEDBC,#FFD3B6,#FFAAA5)]">
      <div className="w-full max-w-md md:max-w-lg relative rounded-3xl shadow-2xl overflow-hidden bg-white/30 backdrop-blur-md border border-white/20">
        {/* Header Gradient */}
        <div className="h-24 bg-[linear-gradient(90deg,#FF6B6B,#FFD93D)] flex items-center justify-center">
          <h2 className="text-white text-2xl font-extrabold drop-shadow-md">
            🍛 Register on PlateShare
          </h2>
        </div>

        <div className="card-body px-6 py-8">
          <form onSubmit={handleRegister}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
              {nameError && (
                <p className="text-red-500 text-xs mt-1">{nameError}</p>
              )}
            </div>

            {/* Photo URL */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Profile Photo URL"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
              {photoError && (
                <p className="text-red-500 text-xs mt-1">{photoError}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
              <button
                onClick={handleShowPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl transition-transform transform hover:scale-105 shadow-md mb-3"
            >
              Register
            </button>

            {/* Divider */}
            <div className="text-center text-gray-700 mb-3">or</div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 py-2 px-4 rounded-xl bg-white shadow-md border border-gray-300 hover:shadow-lg transition-transform transform hover:scale-105 mb-4"
            >
              <FcGoogle className="text-xl" />
              <span className="text-gray-700 font-medium">
                Continue with Google
              </span>
            </button>

            <div className="text-center text-sm text-gray-700">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-green-500 font-semibold hover:underline"
              >
                Login
              </Link>
            </div>
          </form>
        </div>

        {/* Footer Gradient Bar */}
        <div className="h-2 w-full bg-[linear-gradient(90deg,#FF6B6B,#FFD93D)] absolute bottom-0 left-0 rounded-b-3xl"></div>
      </div>
    </div>
  );
};

export default Register;
