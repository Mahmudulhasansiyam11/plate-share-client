import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register";
  }, []);

  const handleRegister = (event) => {
    event.preventDefault();
    // console.log(event.target);
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // console.log({name, photo, email, password});

    // name validation
    if (name.length < 5) {
      setNameError("Name should be more than 5 character");
      return;
    } else {
      setNameError("");
    }

    // password validation
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

    // photoURL validation
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

    // Create User Functionality
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);

        // Update User Functionality
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(result.user);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Google Sign In Functionality
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        console.log(result.user?.photoURL);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // handle password
  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center bg-white py-3git  items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 bg-[linear-gradient(to_right,#00F260,#0575E6)]">
        <div className="card-body">
          <h3 className="font-semibold text-2xl text-center">
            {" "}
            Register your account{" "}
          </h3>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* text */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              <div>
                {nameError && (
                  <p className="text-red-400 text-xs">{nameError}</p>
                )}
              </div>
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />
              <div>
                {photoError && (
                  <p className="text-red-400 text-xs">{photoError}</p>
                )}
              </div>
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={handleShowPassword}
                  className="btn btn-xs absolute top-2 right-6"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>
              <div>
                {passwordError && (
                  <p className="text-red-400 text-xs">{passwordError}</p>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-neutral mt-4 btn-outline tracking-wide transition-transform transform hover:scale-105"
              >
                Register
              </button>

              <div>
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-2 border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 bg-white"
                >
                  <FcGoogle className="text-xl" />
                  <span className="text-sm font-medium text-gray-700">
                    Continue with Google
                  </span>
                </button>
              </div>

              <p className="font-semibold text-center pt-5">
                Already Have An Account ?{" "}
                <Link className="text-secondary" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
