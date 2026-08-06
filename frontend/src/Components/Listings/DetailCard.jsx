import React, { useContext } from "react";
import "./Listing.css";
import "./DetailCard.css";
import Location from "../../assets/location.svg?react";
import HeartEmpty from "../../assets/heart.svg?react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const DetailCard = ({ listing }) => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <>
      {" "}
      {user ? (
        <div className="w-9/10  flex flex-col gap-4 flex-wrap mx-auto mt-6 ">
          <div className="flex flex-row gap-4 flex-wrap card w-full">
            <img
              src={listing.avatar.url}
              className="avatar h-40 w-40 rounded-full"
            />
            <div className="info  flex flex-col ml-4 mt-4 gap-2">
              <h2 className="text-xl font-semibold">{listing.title}</h2>
              <p className="text-blue-600">
                {listing.profession[0].toUpperCase() +
                  listing.profession.slice(1)}
              </p>

              <p className="flex  font-medium text-sm text-gray-600">
                <Location className="mr-2 h-5 w-5 text-gray-600" />
                {listing.location}
              </p>
              <p>{listing.reviews.length} Reviews </p>
            </div>
            <div className="options flex flex-row gap-6 mt-4 items-center ml-auto">
              {user ? (
                <>
                  {listing.owner.id === user.id ? (
                    <button className="blue-btn">Edit Your Profile</button>
                  ) : (
                    <>
                      <button className="blue-btn">Book Now</button>
                      <button className="blue-ouline-btn">Message</button>
                    </>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="lower flex flex-row gap-4 flex-wrap justify-between">
            <div className="about card grow-1 flex flex-col gap-6 ">
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
                  <p className="mt-2  font-medium text-gray-600 text-sm">
                    Total Reviews :{listing.reviews.length}
                  </p>
                </div>
              ) : null}
            </div>
            {listing.owner.id !== user.id ? (
              <div className="booking card flex flex-col ">
                <h2 className="text-2xl font-semibold">Booking</h2>
                <p className="mt-4 mb-4 font-medium text-gray-600 text-sm">
                  {listing.price} /Hour
                </p>
                <form className="flex flex-col justify-between items-center gap-3">
                  <input
                    type="date"
                    className="form-input border-2 border-gray-400 text-gray-500 "
                    placeholder="Date"
                    name="date"
                  />
                  <input
                    type="time"
                    className="form-input border-2 border-gray-400 text-gray-500"
                    placeholder="Time"
                    name="time"
                  />
                  <button className="blue-btn">Book Now</button>
                </form>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <>Login First</>
      )}
    </>
  );
};

export default DetailCard;
