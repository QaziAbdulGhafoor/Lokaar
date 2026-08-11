import React, { useContext, useState } from "react";
import "./Listing.css";
import "./DetailCard.css";
import Location from "../../assets/location.svg?react";
import HeartEmpty from "../../assets/heart.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import api from "../../API/api";
import MessageCard from "../Other/MessageCard";

const DetailCard = ({ listing, id }) => {
  const { user, setUser } = useContext(AuthContext);
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
  });
  //console.log(bookingData);
  const navigate = useNavigate();

  //const isOwner = listing.owner.id === user.id;

  const handleDelete = async () => {
    const res = await api.delete(`/listings/${listing._id}`);
    navigate("/listings ");
    console.log(res);
  };

  const handleChange = (e) => {
    setBookingData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleBooking = async (e) => {
    e.preventDefault();
    const newData = { date: bookingData.date, time: bookingData.time };
    const res = await api.post(`/booking/${id}`, newData);
    console.log(res);
  };
  return (
    <>
      {" "}
      <div className="w-9/10  flex flex-col gap-4 flex-wrap mx-auto mt-6 ">
        <div className="flex flex-row gap-4 flex-wrap card w-full">
          <img
            src={listing.avatar.url}
            className="avatar h-40 w-40 rounded-full"
          />
          <div className="info  flex flex-col ml-4 mt-4 gap-2">
            <h2 className="text-xl font-semibold">{listing.title}</h2>
            {/* <p className="text-blue-600">
                {listing.profession[0].toUpperCase() +
                  listing.profession.slice(1)}
              </p> */}

            <p className="flex  font-medium text-sm text-gray-600">
              <Location className="mr-2 h-5 w-5 text-gray-600" />
              {listing.location}
            </p>
            <p>{listing.reviews.length} Reviews </p>
          </div>
          <div className="options flex flex-row gap-6 mt-4 items-center ml-auto">
            {user ? (
              <>
                {listing.owner._id === user.id ? (
                  <>
                    <button className="blue-btn">Edit</button>
                    <button className="blue-outline-red" onClick={handleDelete}>
                      Delete
                    </button>
                  </>
                ) : listing.owner._id !== user.id ? (
                  <>
                    <button className="blue-btn">Book Now</button>
                    <button className="blue-ouline-btn">Message</button>
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="lower flex flex-row gap-4 flex-wrap justify-between">
          <div className="about card flex flex-col gap-6 w-7/10">
            <div className="info">
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="mt-2 mb-4 font-medium text-gray-600 w-4/5 text-l">
                {listing.about}
              </p>
            </div>
            {listing.services.length > 0 ? (
              <div className="skills ">
                <h2 className="text-xl font-semibold">Services Offered</h2>
                <div className="serv-container flex flex-wrap gap-4 mt-2  mt-4">
                  {listing.services.map((serv) => {
                    return (
                      <div className=" bg-gray-200 py-1 px-2 text-sm rounded text-gray-500">
                        {serv}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {listing.reviews.length > 0 ? (
              <div className="reviews">
                <h2 className="text-xl font-semibold mt-4">Reviews</h2>
                <p className="mt-2 font-medium text-gray-600 text-sm">
                  Total Reviews :{listing.reviews.length}
                </p>
                {/* {listing.reviews.map((rev) => {
                    return (
                      <div>
                        <h2>{rev.creator}</h2>
                        <p>{rev.review}</p>
                        <p>Ratings:{rev.rating}</p>
                      </div>
                    );
                  })} */}
              </div>
            ) : null}
          </div>
          {user && listing.owner._id !== user.id ? (
            <div className="booking card flex flex-col">
              <h2 className="text-2xl font-semibold">Booking</h2>
              <p className="mt-4 mb-4 font-medium text-gray-600 text-sm">
                {listing.price} /Hour
              </p>
              <form
                className="flex flex-col justify-between items-center gap-3"
                onSubmit={handleBooking}
              >
                <input
                  type="date"
                  className="form-input border-2 border-gray-400 text-gray-500 "
                  placeholder="Date"
                  name="date"
                  onChange={handleChange}
                />
                <input
                  type="time"
                  className="form-input border-2 border-gray-400 text-gray-500"
                  placeholder="Time"
                  name="time"
                  onChange={handleChange}
                />
                <button className="blue-btn">Book Now</button>
              </form>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailCard;
