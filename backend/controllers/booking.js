const Listing = require("../models/Listing");
const getCoord = require("../utils/geoCoord");
const Booking = require("../models/Booking");
const { findByIdAndUpdate } = require("../models/Review");
const wrapAsync = require("../utils/wrapAsync");

module.exports.getBookForm = wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.json({ message: "booking form sent", seller: listing.title });
});

module.exports.postBookForm = wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listingToOrder = await Listing.findById(id);
  let { date, startTime, endTime } = req.body;
  const newBooking = new Booking({
    date: date,
    startTime: startTime,
    endTime: endTime,
    customer: req.user._id,
    provider: listingToOrder.owner,
    listing: id,
    price: listingToOrder.price,
  });
  await newBooking.save();
  res.json({ Booking: newBooking });
});

module.exports.getEdit = wrapAsync(async (req, res) => {
  let { bookingId } = req.params;
  let booking = await Booking.findById(bookingId);
  res.json({ message: "edit booking form sent", booking });
});

module.exports.postEdit = wrapAsync(async (req, res) => {
  let { bookingId } = req.params;
  let booking = await Booking.findById(bookingId);
  let { status } = req.body;
  await Booking.findByIdAndUpdate(bookingId, { status: status });
  res.json({ message: "done" });
});

module.exports.deleteBooking = wrapAsync(async (req, res) => {
  let { bookingId } = req.params;
  await Booking.findByIdAndDelete(bookingId);
  res.json({ message: "deleted your booking" });
});
