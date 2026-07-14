const Listing = require("../models/Listing");
const getCoord = require("../utils/geoCoord");
const Booking = require("../models/Booking");

module.exports.getBookForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.json({ message: "booking form sent", seller: listing.title });
};

module.exports.postBookForm = async (req, res) => {
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
};

module.exports.getEdit = async (req, res) => {
  let { bookingId } = req.params;
  let booking = await Booking.findById(bookingId);
  res.json({ message: "edit booking form sent", booking });
};

module.exports.postEdit = async (req, res) => {
  let { id, bookingId } = req.params;
  const listing = await Listing.findById(id);
  let booking = await Booking.findById(bookingId);
  let { date, slot } = req.body;
  booking.date = date;
  booking.slot = slot;
  await booking.save();
  res.json({ message: "booking updated", booking });
};

module.exports.deleteBooking = async (req, res) => {
  let { bookingId } = req.params;
  await Booking.findByIdAndDelete(bookingId);
  res.json({ message: "deleted your booking" });
};
