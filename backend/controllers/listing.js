const Listing = require("../models/Listing");
const getCoord = require("../utils/geoCoord");
const Review = require("../models/Review");
const User = require("../models/User");
const wrapAsync = require("../utils/wrapAsync");

//Index which returns all available listings

module.exports.getAll = wrapAsync(async (req, res) => {
  let query = {};

  if (req.query.lat && req.query.lon) {
    const lon = Number(req.query.lon);
    const lat = Number(req.query.lat);

    query.geometry = {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lon, lat],
        },
        $maxDistance: 10000,
      },
    };
  }

  if (req.query.min && req.query.max) {
    const minPrice = Number(req.query.min);
    const maxPrice = Number(req.query.max);

    query.price = {
      $gte: minPrice,
      $lte: maxPrice,
    };
  }

  if (req.query.category) {
    query.profession = req.query.category;
  }

  const listings = await Listing.find(query);

  res.json({ listings });
});

//serves form to create a new listing
module.exports.getNew = (req, res) => {
  res.json({ message: "new form served" });
};

//submits new form data and creates a listing
module.exports.postNew = wrapAsync(async (req, res) => {
  let {
    title,
    about,
    profession,
    price,
    availability,
    location,
    responseTime,
  } = req.body;
  let available = JSON.parse(req.body.availability);

  let newListing = new Listing({
    title,
    about,
    profession,
    price,
    availability: available,
    location,
  });

  let coordinates = await getCoord(location);
  newListing.geometry = {
    type: "Point",
    coordinates: coordinates,
  };

  if (req.file) {
    newListing.avatar = {
      filename: req.file.filename,
      url: req.file.path,
    };
  }

  newListing.owner = req.user._id;
  console.log(newListing);
  await newListing.save().then((listing) => {
    res.json({ message: "listing created successfully", newListing });
  });
});

//serves the detailed view of a listing
module.exports.detailedListing = wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findOne({ _id: id })
    .populate("owner")
    .populate({
      path: "reviews",
      populate: { path: "creator" },
    });
  if (!listing) {
    res.json({ message: "listing not available" });
  }
  res.json({ listing });
});

//Serves a form to edit a listing
module.exports.getEdit = wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.json({ message: `edit form served for ${listing.title}` });
});

//submits edit data and makes changes in listing
module.exports.putEdit = wrapAsync(async (req, res) => {
  let { id } = req.params;
  let { title, about, location, price } = req.body;

  // console.log("id is", id, "values are", req.body);
  // const myprice = Number(price);
  // console.log(myprice);

  const updatedListing = await Listing.findByIdAndUpdate(
    id,
    {
      $set: {
        title,
        about,
        location,
        price: Number(price),
      },
    },
    {
      runValidators: true,
    },
  );
  if (!updatedListing) {
    return res.json({ message: "listing not found" });
  }
  res.json({ message: "listing updated successfully", updatedListing });
});

//deletes a listing
module.exports.deleteListing = wrapAsync(async (req, res) => {
  let { id } = req.params;
  let result = await Listing.findByIdAndDelete(id);
  res.json({ message: "deleted", result });
});

//adds listing to favourites of a user
module.exports.addFav = wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  let user = req.user;
  user.favourites.push(listing._id);
  await user.save();
  res.json({ message: "added to favourite" });
});

module.exports.getFav = wrapAsync(async (req, res) => {
  let user = await User.findById(req.user.id).populate("favourites");
  res.json({ favourites: user.favourites });
  //res.json({ user });
});

//removes listing from favourites of a user
module.exports.removeFav = wrapAsync(async (req, res) => {
  let { id } = req.params;
  let user = await User.findById(req.user._id);
  user.favourites = user.favourites.filter((fav) => fav.toString() !== id);
  await user.save();
  res.json({ user: user });
});
