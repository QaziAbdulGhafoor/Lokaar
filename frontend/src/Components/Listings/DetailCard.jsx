import React, { useContext, useEffect, useState } from "react";
import "./Listing.css";
import "./DetailCard.css";
import Location from "../../assets/location.svg?react";
import HeartEmpty from "../../assets/heart.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { ListingContext } from "../../Context/ListingContext";
import api from "../../API/api";
import MessageCard from "../Other/MessageCard";
import BookingCard from "./BookingCard";
import ReviewForm from "./ReviewForm";
import Rating from "@mui/material/Rating";
import { AlertContext } from "../../Context/AlertContext";
import ShowAlert from "./ShowAlert";

const DetailCard = ({ listing, id }) => {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);
  const ownerId = localStorage.getItem("user");
  const { alert, setAlert } = useContext(AlertContext);
  const { setListing } = useContext(ListingContext);

  useEffect(() => {
    setListing(listing);
  }, []);
  //console.log(listing);

  const dayValues = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //console.log(alert);
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
  });
  //console.log(bookingData);
  const navigate = useNavigate();

  //const isOwner = listing.owner.id === user.id;

  const handleDelete = async () => {
    const res = await api.delete(`/listings/${listing._id}`);
    navigate("/");
    setAlert({ type: "red", message: "Deleted Listing Successfully" });
  };

  const handleEdit = async () => {
    navigate(`/listings/${listing._id}/edit`);
  };

  console.log("DETAIL RENDER");
  //console.log(alert);

  return (
    <>
      {alert.type !== "" ? (
        <ShowAlert message={alert.message} type={alert.type} />
      ) : (
        <></>
      )}
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
                    <button className="blue-btn" onClick={handleEdit}>
                      Edit
                    </button>
                    <button className="blue-outline-red" onClick={handleDelete}>
                      Delete
                    </button>
                  </>
                ) : listing.owner._id !== user.id ? (
                  <>
                    <Link to={"/booking"}>
                      <button className="blue-btn">Book Now</button>
                    </Link>

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
          <div className="about card flex flex-col gap-6 w-full">
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

            <div className="availabilty">
              <h2 className="text-xl font-semibold">Working Days</h2>
              <div className="days flex flex-row gap-4 my-3">
                {listing.availability.days.map((day) => {
                  return (
                    <div className=" bg-gray-200 py-1 px-2 text-sm rounded text-gray-500">
                      {dayValues[day]}
                    </div>
                  );
                })}
              </div>
              <h2 className="text-xl font-semibold mt-4">Working Hours</h2>
              <p className="mt-2">
                {listing.availability.startTime} -{" "}
                {listing.availability.endTime}
              </p>
            </div>

            <div className="price">
              <h2 className="text-xl font-semibold mt-4">Charges</h2>
              <p className="mt-2">Rs - {listing.price} /hour</p>
            </div>

            {listing.reviews.length > 0 ? (
              <>
                <h2 className="text-xl font-semibold mt-4">Reviews</h2>
                <div className="reviews-container flex flex-col gap-4">
                  {listing.reviews.map((rev) => {
                    return (
                      <div className="flex flex-row gap-4 bg-gray-200 p-4 items-center rounded">
                        <p className="bg-blue-700 h-8 w-8 text-white text-center rounded-full pt-1">
                          {rev.creator.username[0]}
                        </p>
                        <Rating
                          name="read-only"
                          value={rev.rating}
                          readOnly
                          className="justify-self-end"
                        />
                        <p>{rev.review}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="review-form w-9/10 mx-auto ">
        <h2 className="text-xl font-semibold mt-4">Share Your Experience</h2>
        <p className="text-gray-600">
          (Please leave a review. It helps others for choosing professionals)
        </p>
        <ReviewForm id={id} setAlert={setAlert} />
      </div>
    </>
  );
};

export default DetailCard;
