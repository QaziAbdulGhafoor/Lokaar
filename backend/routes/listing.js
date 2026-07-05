const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing");
const getCoord = require("../utils/geoCoord");
const middlewares = require("../middleware/middleware");

router
  .route("/")
  .get((req, res) => {
    res.json({ message: "all listings" });
  })
  .post(async (req, res) => {
    let {
      owner_name,
      title,
      about,
      avatar,
      profession,
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
      status,
      availability,
      services,
      location,
    });

    // let coordinates = await getCoord(location);
    // newListing.geometry = {
    //   type: "Point",
    //   coordinates: coordinates,
    // };

    newListing.owner = req.user;
    await newListing.save().then((listing) => {
      res.json({ message: "listing created successfully", newListing });
    });
  });

router.get("/new", (req, res) => {
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
  .put(middlewares.isOwner, async (req, res) => {
    let { id } = req.params;
    let { title, about, avatar, status, availability, services, location } =
      req.body;

    await Listing.findByIdAndUpdate(id, {
      title: title,
      about: about,
      avatar: avatar,
      status: status,
      availability: availability,
      services: services,
      location: location,
    });
    res.json({ message: "listing updated successfully" });
  })
  .delete(middlewares.isOwner, async (req, res) => {
    let { id } = req.params;
    let result = await Listing.findByIdAndDelete(id);
    res.json({ message: "deleted", result });
  });

router;

router.get("/:id/edit", middlewares.isOwner, async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findOne({ _id: id });
  res.json({ message: `edit form served for ${listing.title}` });
});

module.exports = router;
