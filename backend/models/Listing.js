const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
    min: 5,
    max: 30,
  },
  about: {
    type: String,
    required: true,
  },
  avatar: { type: String, required: true },
  profession: {
    type: String,
    enum: [
      "electrician",
      "plumber",
      "painter",
      "cleaner",
      "tutor",
      "carpenter",
    ],
  },
  status: {
    type: String,
    enum: ["pending", "verified"],
    required: true,
    default: "pending",
  },
  availability: [
    {
      day: {
        type: String,
        enum: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        required: true,
      },
      slots: [String],
    },
  ],
  services: {
    type: [String],
  },
  price: {
    type: Number,
    min: 100,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  // geometry: {
  //   type: {
  //     type: String,
  //     enum: ["Point"],
  //     required: true,
  //   },
  //   coordinates: {
  //     type: [Number],
  //     required: true,
  //   },
  // },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

listingSchema.index({ geometry: "2dsphere" });

const Listing = new mongoose.model("Listing", listingSchema);

module.exports = Listing;
