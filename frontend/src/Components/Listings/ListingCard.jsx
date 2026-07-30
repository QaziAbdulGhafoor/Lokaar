import React from "react";
import "./Listing.css";
import Location from "../../assets/location.svg?react";
import HeartEmpty from "../../assets/heart.svg?react";
import { Link } from "react-router-dom";

const ListingCard = ({ listing }) => {
  return (
    <div className="w-90 h-75 flex flex-col gap-4 card">
      <div className="upper-section flex gap-4 items-center">
        <img
          src={listing.avatar.url}
          className="avatar h-20 w-20 rounded-full"
        />
        <div className="info ml-2 flex flex-col w-3/4">
          <h2 className="text-xl font-semibold">{listing.title}</h2>
          <p className="text-blue-600">{listing.profession}</p>
        </div>
        <HeartEmpty className="h-7 w-7 text-gray-600 self-start mr-2 mt-2" />
      </div>
      <div className="lower-section">
        <p className="flex mt-4 mb-3 font-medium text-sm text-gray-600">
          <Location className="mr-2 h-5 w-5 text-gray-600" />
          {listing.location}
        </p>
        <p className="ml-2 mt-4 mb-4 font-medium text-gray-600 text-sm">
          {listing.about}
        </p>
        <span className="flex justify-between items-center mt-4">
          <h2 className="ml-2">
            <b>
              Rs.
              {listing.price}
            </b>
            /Hour
          </h2>
          <Link to={`/listings/${listing._id}`}>
            <button className="blue-ouline-btn">View Profile</button>
          </Link>
        </span>
      </div>
    </div>
    //<h2>hi</h2>
  );
};

export default ListingCard;
