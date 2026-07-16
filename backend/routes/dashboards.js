const express = require("express");
const router = express.Router();
const middlewares = require("../middleware/middleware");
const User = require("../models/User");
const Booking = require("../models/Booking");

router.get("/", middlewares.isLoggedIn, async (req, res) => {
  let userId = req.user._id;
  let user = await User.findById(userId);
  if (user.category === "customer") {
    let myCompletedBookings = await Booking.find({
      customer: userId,
      status: "completed",
    });

    let myPendingBookings = await Booking.find({
      customer: userId,
      status: "pending",
    });

    return res.json({
      Completd: myCompletedBookings,
      Pending: myPendingBookings,
    });
  }
  let myCompletedBookings = await Booking.find({
    provider: userId,
    status: "completed",
  });
  let myCancelledBookings = await Booking.find({
    provider: userId,
    status: "cancelled",
  });

  let myPendingBookings = await Booking.find({
    provider: userId,
    status: "pending",
  });

  let earnings = myCompletedBookings
    .map((element) => element.price)
    .reduce((a, b) => a + b, 0);

  res.json({
    earnings: earnings,
    Completd: myCompletedBookings,
    Cancelled: myCancelledBookings,
    Pending: myPendingBookings,
  });
});

module.exports = router;
