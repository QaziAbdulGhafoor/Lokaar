const express = require("express");
const router = express.Router();
const middlewares = require("../middleware/middleware");
const User = require("../models/User");
const Booking = require("../models/Booking");

router.get("/", middlewares.isLoggedIn, async (req, res) => {
  let userId = req.user._id;
  let user = await User.findById(userId);

  let myCompletedBookings = await Booking.find({
    provider: userId,
    status: "completed",
  }).populate("customer");
  let myCancelledBookings = await Booking.find({
    provider: userId,
    status: "cancelled",
  }).populate("customer");

  let myPendingBookings = await Booking.find({
    provider: userId,
    status: "pending",
  }).populate("customer");

  let myAllBoookings = await Booking.find({ provider: userId });

  let earnings = myCompletedBookings
    .map((element) => element.price)
    .reduce((a, b) => a + b, 0);

  res.json({
    earnings: earnings,
    Completed: myCompletedBookings,
    all: myAllBoookings,
    Cancelled: myCancelledBookings,
    Pending: myPendingBookings,
  });
});

module.exports = router;
