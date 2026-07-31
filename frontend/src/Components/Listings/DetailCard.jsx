import React from "react";
import "./Listing.css";
import Location from "../../assets/location.svg?react";
import HeartEmpty from "../../assets/heart.svg?react";
import { Link } from "react-router-dom";

const DetailCard = ({ listing }) => {
  const reviews = listing.reviews;
  return (
    <div className="w-9/10  flex flex-col gap-4 flex-wrap mx-auto mt-6 flex-sm-col ">
      <div className="  flex flex-row gap-4 flex-wrap card w-full">
        <img
          src={listing.avatar.url}
          className="avatar h-40 w-40 rounded-full"
        />
        <div className="info  flex flex-col ml-4 mt-4 gap-2 w-44">
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
      <div className="lower flex flex-row justify-between">
        <div className=" card ">
          <div className="about w-230">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-2 mb-4 font-medium text-gray-600 text-sm">
              {listing.about}
            </p>
          </div>
          <div className="reviews">
            <h2 className="text-2xl font-semibold mt-4">Reviews</h2>
            <p className="mt-2  font-medium text-gray-600 text-sm">
              Total Reviews :{listing.reviews.length}
            </p>
            {reviews.map((review) => (
              <div className="card">
                <h2>{review.rating} Stars</h2>
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="booking card">
          <span>
            <h2 className="text-2xl font-semibold">Booking</h2>
            <p className="mt-2 mb-4 font-medium text-gray-600 text-sm">
              {listing.price} /Hour
            </p>
          </span>

          <form>
            <div className="book-form flex flex-col gap-2 items-center">
              <div className="inp">
                <label htmlFor="date">Select Your Date</label>
                <br />
                <input
                  type="date"
                  className="form-input border-gray-200 border-2 text-gray-400"
                  placeholder="Date"
                  name="date"
                  id="date"
                />
              </div>
              <div className="inp">
                <label htmlFor="time">Select Your Time</label>
                <br />
                <input
                  type="time"
                  className="form-input border-gray-200 border-2 text-gray-400"
                  placeholder="Time"
                  name="time"
                />
              </div>
              <button className="blue-btn">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
