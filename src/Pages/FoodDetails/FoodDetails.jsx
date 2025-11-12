import { use, useEffect, useRef, useState } from "react";
import { FaClock, FaMapMarkerAlt, FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
// import { div } from "framer-motion/client";
import RequestTable from "../../Components/RequestTable/RequestTable";

const FoodDetails = () => {
  const { user } = use(AuthContext);
  const foodData = useLoaderData();
  const { _id: foodId} = foodData;
  const [ request, setRequest ] = useState([]);
  const reqModalRef = useRef(null);


  // implement useEffect to load data
  useEffect(() => {
    fetch(`https://plate-share-api-server.vercel.app/foods/requests/${foodId}`)
    .then(res => res.json())
    .then(data => {
      console.log('request for this product: ', data);
      setRequest(data);
    })
  }, [foodId]);

  // Handle Request Modal
  const handleReqModalOpen = () => {
    reqModalRef.current.showModal();
  };

  // Handle Request Food form submission
  const handleRequestFood = (event) => {
    event.preventDefault();

    const form = event.target;
    const requestData = {
      food_id: foodId,
      donator_name: user.displayName,
      donator_email: user.email,
      donator_image: user.photoURL,
      food_status: "pending",
      location: form.location.value,
      contact: form.contact.value,
      reason: form.reason.value,
      food_name: foodData.food_name,
    };

    console.log("Request Data:", requestData);

    fetch("https://plate-share-api-server.vercel.app/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            Swal.fire({
          title: "Request Sent!",
          text: "Your food request has been submitted successfully.",
          icon: "success",
        });
        reqModalRef.current.close();
        form.reset();

        // add the new request to the state
        requestData._id = data.insertedId;
        const newReq = [...request, requestData];
        setRequest(newReq);
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while submitting your request.",
          icon: "error",
        });
      });
  };

  return (
   <div>

    {/* display food details */}
     <div className="min-h-screen flex justify-center items-center px-4 py-10 bg-[linear-gradient(135deg,#FFEDBC,#FFD3B6,#FFAAA5)] relative">
      {/* Decorative Circles */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 md:w-[448px] h-72 sm:h-96 md:h-[448px] bg-green-300 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 md:w-[448px] h-72 sm:h-96 md:h-[448px] bg-orange-300 rounded-full blur-3xl opacity-50"></div>

      {/* Card */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-3xl bg-white/50 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-6 sm:p-8 md:p-10">
        {/* Food Image */}
        <div className="w-full h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
          <img
            src={foodData.food_image}
            alt={foodData.food_name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Food Info */}
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3">
          {foodData.food_name}
        </h2>
        <p className="text-gray-700 mb-3 text-sm sm:text-base">
          {foodData.additional_notes}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 mb-6">
          <p className="flex items-center gap-2 text-sm sm:text-base">
            <FaUtensils className="text-green-600" /> {foodData.food_quantity}
          </p>
          <p className="flex items-center gap-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-red-500" />{" "}
            {foodData.pickup_location}
          </p>
          <p className="flex items-center gap-2 text-sm sm:text-base">
            <FaClock className="text-yellow-500" /> Expires on:{" "}
            <span className="font-medium">{foodData.expire_date}</span>
          </p>
        </div>

        {/* Donator Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white/30 p-4 rounded-lg border border-white/20 mb-6">
          <img
            src={foodData.donator_image}
            alt={foodData.donator_name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gray-800">
              {foodData.donator_name}
            </p>
            <p className="text-gray-600 text-sm">{foodData.donator_email}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* Request Food Button */}
          <div>
            <button
              onClick={handleReqModalOpen}
              className="btn bg-green-500 hover:bg-green-600 text-white w-full md:w-auto"
            >
              Request Food
            </button>

            {/* Modal */}
            <dialog ref={reqModalRef} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-white rounded-2xl p-6">
                <h3 className="font-bold text-lg text-green-700 mb-4">
                  Request Food: {foodData.food_name}
                </h3>

                {/* Request Form */}
                <form onSubmit={handleRequestFood} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter your location"
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Contact No
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      placeholder="Enter your contact number"
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Why do you need this food?
                    </label>
                    <textarea
                      name="reason"
                      rows="3"
                      placeholder="Explain briefly why you need this food..."
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    ></textarea>
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => reqModalRef.current.close()}
                      className="btn bg-gray-300 text-gray-700 hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn bg-green-500 hover:bg-green-600 text-white"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>

        </div>
      </div>
    </div>


     {/* Only show Request Table if the logged-in user is the owner */}
      {user?.email === foodData.donator_email && (
        <div className="my-10 px-4">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Requests for {foodData.food_name}
          </h2>
          <RequestTable requests={request} />
        </div>
      )}


   </div>
  );
};

export default FoodDetails;

