import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../API/api";
import { ListingContext } from "../../../Context/ListingContext";
import { AlertContext } from "../../../Context/AlertContext";
import Loader from "../../../Components/ui/Loader";
import ShowAlert from "../../../Components/ui/ShowAlert";

const BookingCard = () => {
  const [isBooking, setIsBooking] = useState(false);
  const { listing } = useContext(ListingContext);
  const { alert, setAlert } = useContext(AlertContext);
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    date: "",
    endTime: "",
    startTime: "",
  });
  const handleChange = (e) => {
    setBookingData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleBooking = async (e) => {
    try {
      setIsBooking(true);
      const id = listing._id;
      e.preventDefault();
      const newData = {
        date: bookingData.date,
        startTime: bookingData.startTime,
        endTime: bookingData.endTime,
      };
      const res = await api.post(`/booking/${id}`, newData);

      {
        res.status === 200
          ? setAlert({ type: "green", message: "Successfully Booked" })
          : res.status === 409
            ? setAlert({ type: "red", message: "Booking Not Available" })
            : null;
      }
    } catch (err) {
      setAlert({ type: "red", message: "Something went wrong" });
      console.log("errrror");
    } finally {
      setIsBooking(false);
    }
  };
  return (
    <div className="booking card w-120 form-box flex flex-col mx-auto mt-16">
      {alert.type === "red" || "green" ? (
        <ShowAlert message={alert.message} type={alert.type} />
      ) : (
        <></>
      )}

      {isBooking ? (
        <Loader message="Processing request" />
      ) : (
        <>
          <h2 className="text-2xl font-semibold">Provide Booking Details</h2>
          {/* <p className="font-medium text-gray-600 text-sm  ">
           {listing.price} /Hour
          </p> */}
          <form
            className="flex flex-col justify-between items-center gap-3"
            onSubmit={handleBooking}
          >
            <label className="self-start">Select Date</label>
            <input
              type="date"
              className="form-input border-2 border-gray-400 text-gray-500"
              placeholder="Date"
              name="date"
              onChange={handleChange}
            />
            <label className="self-start">Select Starting Time</label>
            <input
              type="time"
              step="1800"
              className="form-input border-2 border-gray-400 text-gray-500"
              placeholder="Time"
              name="startTime"
              onChange={handleChange}
            />
            <label className="self-start ">Select Ending Time</label>
            <input
              type="time"
              step="1800"
              className="form-input border-2 border-gray-400 text-gray-500"
              placeholder="Time"
              name="endTime"
              onChange={handleChange}
            />
            <button className="blue-btn">Book Now</button>
          </form>
        </>
      )}
    </div>
  );
};

export default BookingCard;
