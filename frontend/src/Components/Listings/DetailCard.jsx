import React from "react";
import "./Listing.css";
import Location from "../../assets/location.svg?react";
import HeartEmpty from "../../assets/heart.svg?react";
import { Link } from "react-router-dom";

const DetailCard = ({ listing }) => {
  return (
    <div className="w-9/10  flex flex-col gap-4 flex-wrap mx-auto mt-6 ">
      <div className="  flex flex-row gap-4 flex-wrap card w-full">
        <img
          src={listing.avatar.url}
          className="avatar h-40 w-40 rounded-full"
        />
        <div className="info  flex flex-col ml-4 mt-4 gap-2">
          <h2 className="text-xl font-semibold">{listing.title}</h2>
          <p className="text-blue-600">
            {listing.profession[0].toUpperCase() + listing.profession.slice(1)}
          </p>

          <p className="flex  font-medium text-sm text-gray-600">
            <Location className="mr-2 h-5 w-5 text-gray-600" />
            {listing.location}
          </p>
          <p>{listing.reviews.length} Reviews </p>
        </div>
        <div className="options flex flex-row gap-6 mt-4 items-center ml-auto">
          <button className="blue-btn">Book Now</button>
          <button className="blue-ouline-btn">Message</button>
        </div>
      </div>
      <div className="lower flex flex-row gap-4">
        <div className="about card ">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-2 mb-4 font-medium text-gray-600 text-sm">
            {listing.about}
          </p>
          <h2 className="text-2xl font-semibold mt-4">Reviews</h2>
          <p className="mt-2  font-medium text-gray-600 text-sm">
            Total Reviews :{listing.reviews.length}
          </p>
        </div>
        <div className="booking card">
          <h2 className="text-2xl font-semibold">Booking</h2>
          <p className="mt-4 mb-4 font-medium text-gray-600 text-sm">
            {listing.price} /Hour
          </p>
          <form>
            <input
              type="date"
              className="form-input"
              placeholder="Date"
              name="date"
            />
            <input
              type="time"
              className="form-input"
              placeholder="Time"
              name="time"
            />
            <input
              type="number"
              className="form-input"
              placeholder="Duration"
              name="duration"
              className="form-input"
            />
            <button className="blue-btn">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
