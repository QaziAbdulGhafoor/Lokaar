import { useContext } from "react";
import React from "react";
import { ListingContext } from "../../Context/ListingContext";
import api from "../../API/api";
import { useNavigate } from "react-router-dom";

const MapPin = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const EditForm = () => {
  const navigate = useNavigate();
  const { listing, setListing } = useContext(ListingContext);

  const handleChange = (e) => {
    setListing((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: listing.title,
      about: listing.about,
      price: listing.price,
      location: listing.location,
    };
    // const res = await api.put(`/listings/${listing._id}`, { data });
    // if (res.status === 200) {
    //   navigate("/");
    // }
    console.log(data);
    const res = await api.put(`/listings/${listing._id}`, data);
    if (res.status === 200) {
      navigate("/");
      window.location.reload();
      setAlert({ type: "green", message: "Edited Successfully" });
    } else {
      navigate("/");
      window.location.reload();
      setAlert({ type: "red", message: "Something was wrong" });
    }
  };

  return (
    <>
      <h1 className="text-3xl text-center my-6 font-bold">Edit Your Service</h1>
      <div className="flex flex-col gap-4 px-4 sm:px-6 py-8 sm:py-10 card border-gray-200 items-center border-2 w-5/7 mx-auto ">
        {" "}
        {/* Service Title */}
        <div className="w-9/10 mt-4">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Service Title
          </label>
          <input
            value={listing.title}
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="e.g. Professional Electrical Wiring"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="w-9/10">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Description
          </label>
          <textarea
            value={listing.about}
            name="about"
            onChange={handleChange}
            rows={4}
            placeholder="Describe your service, what's included, and what makes you unique..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base text-gray-700 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="text-right text-xs text-gray-400 mt-1">124 / 500</div>
        </div>
        <div className="w-9/10">
          <label className="block text-sm font-semibold text-gray-800 mb-2 mt-4">
            Hourly Rate
          </label>
          <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
            <span className="flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500 border-r border-gray-300 text-sm sm:text-base">
              $
            </span>
            <input
              value={listing.price}
              name="price"
              onChange={handleChange}
              type="number"
              className="flex-1 px-3 sm:px-4 py-2.5 text-sm sm:text-base text-gray-700 focus:outline-none min-w-0"
              required
            />
            <span className="flex items-center px-3 sm:px-4 bg-gray-50 text-gray-500 border-l border-gray-300 text-sm sm:text-base">
              /hr
            </span>
          </div>
        </div>
        {/* Service Area */}
        <div className="pb-6 border-b border-gray-100 w-9/10">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Service Area
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              name="location"
              value={listing.location}
              onChange={handleChange}
              placeholder="e.g. Within 10 miles of your location"
              className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <button className="blue-ouline-btn" onClick={handleSubmit}>
          Confirm
        </button>
      </div>
    </>
  );
};

export default EditForm;
