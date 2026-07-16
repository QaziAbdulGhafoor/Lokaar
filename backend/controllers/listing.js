const Listing = require("../models/Listing");
const getCoord = require("../utils/geoCoord");
const Review = require("../models/Review");
const User = require("../models/User");

//Index which returns all available listings

module.exports.getAll = async (req, res) => {
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
};

//serves form to create a new listing
module.exports.getNew = (req, res) => {
  res.json({ message: "new form served" });
};

//submits new form data and creates a listing
module.exports.postNew = async (req, res) => {
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

  // let coordinates = await getCoord(location);
  // newListing.geometry = {
  //   type: "Point",
  //   coordinates: coordinates,
  // };

  newListing.owner = req.user._id;
  await newListing.save().then((listing) => {
    res.json({ message: "listing created successfully", newListing });
  });
};

//serves the detailed view of a listing
module.exports.detailedListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findOne({ _id: id }).populate("reviews");
  if (!listing) {
    res.json({ message: "listing not available" });
  }
  res.json({ message: "listing found", result: listing });
};

//Serves a form to edit a listing
module.exports.getEdit = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.json({ message: `edit form served for ${listing.title}` });
};

//submits edit data and makes changes in listing
module.exports.putEdit = async (req, res) => {
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
};

//deletes a listing
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let result = await Listing.findByIdAndDelete(id);
  res.json({ message: "deleted", result });
};

//adds listing to favourites of a user
module.exports.addFav = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  let user = req.user;
  user.favourites.push(listing._id);
  await user.save();
  res.json({ message: "added to favourite" });
};

//removes listing from favourites of a user
module.exports.removeFav = async (req, res) => {
  let { id } = req.params;
  let user = await User.findById(req.user._id);
  user.favourites = user.favourites.filter((fav) => fav.toString() !== id);
  await user.save();
  res.json({ user: user });
};
