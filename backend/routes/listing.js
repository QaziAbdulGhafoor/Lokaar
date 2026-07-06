const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing");
const getCoord = require("../utils/geoCoord");
const middlewares = require("../middleware/middleware");
const Review = require("../models/Review");

router
  .route("/")
  .get(async (req, res) => {
    let query = {};
    if (req.query.lat && req.query.lon) {
      let lon = Number(req.query.lon);
      let lat = Number(req.query.lat);
      query = {
        geometry: {
          $near: {
            $geometry: { type: "Point", coordinates: [lon, lat] },
            $maxDistance: 10000,
          },
        },
      };
    }

    if (req.query.category) {
      let category = req.query.category;
      query = { profession: req.query.category };
    }

    if (req.query.min && req.query.max) {
      let Minprice = Number(req.query.min);
      let Maxprice = Number(req.query.max);
      query = { price: { $gte: Minprice, $lte: Maxprice } };
    }

    const listings = await Listing.find(query).populate("reviews");
    res.json({ message: "all listings", listings });
  })

  .post(middlewares.isLoggedIn, async (req, res) => {
    let {
      title,
      about,
      avatar,
      profession,
      price,
      status,
      availability,
      services,
      location,
    } = req.body;

    let newListing = new Listing({
      title,
      about,
      avatar,
      profession,
      price,
      status,
      availability,
      services,
      location,
    });

    let coordinates = await getCoord(location);
    newListing.geometry = {
      type: "Point",
      coordinates: coordinates,
    };

    newListing.owner = req.user._id;
    await newListing.save().then((listing) => {
      res.json({ message: "listing created successfully", newListing });
    });
  });

router.get("/new", middlewares.isLoggedIn, (req, res) => {
  res.json({ message: "new form served" });
});

router
  .route("/:id")
  .get(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findOne({ _id: id });
    if (!listing) {
      res.json({ message: "listing not available" });
    }
    res.json({ message: "listing found", result: listing });
  })
  .put(middlewares.isLoggedIn, middlewares.isOwner, async (req, res) => {
    let { id } = req.params;
    let {
      title,
      about,
      avatar,
      status,
      availability,
      services,
      location,
      price,
    } = req.body;

    await Listing.findByIdAndUpdate(id, {
      title: title,
      about: about,
      avatar: avatar,
      status: status,
      availability: availability,
      services: services,
      location: location,
      price: price,
    });
    res.json({ message: "listing updated successfully" });
  })

  .delete(middlewares.isLoggedIn, middlewares.isOwner, async (req, res) => {
    let { id } = req.params;
    let result = await Listing.findByIdAndDelete(id);
    res.json({ message: "deleted", result });
  });

router;

router.get(
  "/:id/edit",
  middlewares.isLoggedIn,
  middlewares.isOwner,
  async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findOne({ _id: id });
    res.json({ message: `edit form served for ${listing.title}` });
  },
);

module.exports = router;
