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

  let { date, time } = req.body;

  let day = new Date(date).getDay();

  console.log(req.body);

  const timeToMinutes = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
  };

  const start = timeToMinutes(listingToOrder.availability.startTime);
  const end = timeToMinutes(listingToOrder.availability.endTime);

  if (
    timeToMinutes(time) > start &&
    timeToMinutes(time) < end &&
    listingToOrder.availability.days.includes(day)
  ) {
    const newBooking = new Booking({
      date: date,
      time: time,
      customer: req.user._id,
      provider: listingToOrder.owner,
      listing: id,
      price: listingToOrder.price,
    });
    await newBooking.save();
    res.json({ Booking: newBooking });
  } else if (timeToMinutes(time) < start || timeToMinutes(time) > end) {
    res.json({ message: "not available at this time slot" });
  } else {
    res.json({ message: "not available at this day" });
  }
};

module.exports.getEdit = async (req, res) => {
  let { bookingId } = req.params;
  let booking = await Booking.findById(bookingId);
  res.json({ message: "edit booking form sent", booking });
};

module.exports.postEdit = async (req, res) => {
  let { bookingId } = req.params;
  let booking = await Booking.findById(bookingId);
  let { date, slot, status } = req.body;
  booking.date = date;
  booking.slot = slot;
  booking.status = status;
  await booking.save();
  res.json({ message: "booking updated", booking });
};

module.exports.deleteBooking = async (req, res) => {
  let { bookingId } = req.params;
  await Booking.findByIdAndDelete(bookingId);
  res.json({ message: "deleted your booking" });
};
