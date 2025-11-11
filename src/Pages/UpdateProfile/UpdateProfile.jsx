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
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
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

    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
        navigate("/myProfile"); 
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[linear-gradient(135deg,#FFEDBC,#FFD3B6,#FFAAA5)] relative overflow-hidden">
      
     
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-orange-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>

     
      <div className="relative w-full max-w-md bg-white/50 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 md:p-10 transition-transform transform hover:scale-[1.02]">
        <h3 className="text-3xl font-bold text-center text-green-700 mb-6 drop-shadow-sm">
          Update Profile
        </h3>

        <form onSubmit={handleProfile} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName || ""}
              className="input input-bordered w-full"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-red-500 text-xs mt-1">{nameError}</p>}
          </div>

          {/* Photo URL */}
          <div>
            <label className="label text-gray-700 font-medium">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full"
              placeholder="Photo URL"
              required
            />
            {photoError && <p className="text-red-500 text-xs mt-1">{photoError}</p>}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto transition-transform transform hover:scale-105"
            >
              Update
            </button>
            <Link
              to="/myProfile"
              className="btn btn-outline w-full sm:w-auto text-green-700 hover:bg-green-50 transition-transform transform hover:scale-105"
            >
              Back to Profile
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
