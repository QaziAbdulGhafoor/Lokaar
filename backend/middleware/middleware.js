const Listing = require("../models/Listing");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.json({ message: "you are not logged in " });
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById({ _id: id });
  if (!listing.owner._id.equals(req.user._id)) {
    return res.json({
      message: "this is not your property",
    });
  }
  next();
};
