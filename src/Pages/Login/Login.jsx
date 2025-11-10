import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setUser, googleSignIn } = use(AuthContext);
//   const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  // console.log(location);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  // Login Functionality
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // console.log({email, password});

    // Sign In Functionality
    signIn(email, password)
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // console.log(error.code);
        console.log(error.message);
        setError(error.code);
      });
  };

  // Goggle Sign In Functionality
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  // Handle Password
  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex justify-center bg-white items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 bg-[linear-gradient(to_right,#00F260,#0575E6)]">
        <div className="card-body">
          <h3 className="font-semibold text-2xl text-center">
            {" "}
            Login your account{" "}
          </h3>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                // onChange={(event) => setEmail(event.target.value)}
                required
              />
              {/* Password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <button onClick={handleShowPassword} className="btn btn-xs absolute top-2 right-6">
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
              </div>
              <div className="link link-hover">
                  Forgot password?
              </div>
              <div>
                {error && <p className="text-red-400 text-xs">{error}</p>}
              </div>
              <button
                type="submit"
                className="btn btn-neutral mt-4 btn-outline tracking-wide transition-transform transform hover:scale-105"
              >
                Login
              </button>

              <div className="text-center mt-1">
                <p className="font-semibold">or</p>
              </div>

              {/* Google Sign In Button */}

              <div>
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-1 border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 bg-white"
                >
                  <FcGoogle className="text-xl" />
                  <span className="text-sm font-medium text-gray-700">
                    Continue with Google
                  </span>
                </button>
              </div>
              <p className="font-semibold text-center pt-5">
                Dont’t Have An Account ?{" "}
                <Link className="text-secondary" to="/auth/register">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
