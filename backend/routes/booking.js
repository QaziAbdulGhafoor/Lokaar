const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/Listing");
const getCoord = require("../utils/geoCoord");
const middlewares = require("../middleware/middleware");
const Booking = require("../models/Booking");

router.get("/:id", middlewares.isLoggedIn, async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.json({ message: "booking form sent", seller: listing.title });
});

router.post("/:id", async (req, res) => {
  let { id } = req.params;
  let listingToOrder = await Listing.findById(id);
  let { date, slot } = req.body;
  const newBooking = new Booking({
    date: date,
    slot: slot,
    customer: req.user._id,
    listing: id,
    price: listingToOrder.price,
  });
  await newBooking.save();
  res.json({ message: "order confirmed", newBooking });
});

router.get("/:bookingId", async (req, res) => {
  let { bookingId } = req.params;
  let booking = await Booking.findById(bookingId);
  res.json({ message: "edit booking form sent", booking });
});

router.post("/:bookingId", async (req, res) => {
  let { bookingId } = req.params;
  let booking = await Booking.findById(bookingId);
});
module.exports = router;
