import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setUser, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login - PlateShare";
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => setError(error.code));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
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
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg relative rounded-3xl shadow-2xl overflow-hidden bg-white/30 backdrop-blur-md border border-white/20">
        {/* Header Gradient */}
        <div className="h-24 bg-[linear-gradient(90deg,#FF6B6B,#FFD93D)] flex items-center justify-center">
          <h2 className="text-white text-2xl font-extrabold drop-shadow-md">
            🍲 Login to PlateShare
          </h2>
        </div>

        <div className="card-body px-6 py-8">
          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
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
                placeholder="Your password"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
              <button
                onClick={handleShowPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm mb-2">{error}</p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl transition-transform transform hover:scale-105 shadow-md mb-3"
            >
              Login
            </button>

            <div className="text-center text-gray-700 mb-3">or</div>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 py-2 px-4 rounded-xl bg-white shadow-md border border-gray-300 hover:shadow-lg transition-transform transform hover:scale-105 mb-4"
            >
              <FcGoogle className="text-xl" />
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </button>

            <div className="text-center text-sm text-gray-700">
              Don’t have an account?{" "}
              <Link to="/auth/register" className="text-green-500 font-semibold hover:underline">
                Register
              </Link>
            </div>
          </form>
        </div>

        {/* Footer Decorative Gradient */}
        <div className="h-2 w-full bg-[linear-gradient(90deg,#FF6B6B,#FFD93D)] absolute bottom-0 left-0 rounded-b-3xl"></div>
      </div>
    </div>
  );
};

export default Login;
