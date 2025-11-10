import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [nameError, setNameError] = useState("");
  const [photoError, setPhotoError] = useState("");

  const { user, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Update Profile";
  }, []);

  const handleProfile = (event) => {
    event.preventDefault();
    // console.log(event.target);
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    // name validation
    if (name.length < 5) {
      setNameError("Name should be more than 5 character");
      return;
    } else {
      setNameError("");
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

    // update user functionality
    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
        navigate("/myProfile"); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 bg-[linear-gradient(to_right,#00F260,#0575E6)]">
        <div className="card-body">
          <h3 className="font-semibold text-2xl text-center">
            {" "}
            Update Profile{" "}
          </h3>
          <form onSubmit={handleProfile}>
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

              <button
                type="submit"
                className="btn btn-neutral mt-4 btn-outline tracking-wide transition-transform transform hover:scale-105"
              >
                Update
              </button>

              <p className="font-semibold text-center pt-5">
                Back to {" "}
                <Link className="text-secondary" to="/myProfile">
                  Profile
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
