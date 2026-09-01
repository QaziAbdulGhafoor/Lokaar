const Listing = require("../models/Listing");
const Review = require("../models/Review");
const wrapAsync = require("../utils/wrapAsync");

module.exports.postReview = wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  let { review, rating } = req.body;
  let newReview = new Review({
    review: review,
    rating: rating,
    creator: req.user._id,
    listing: id,
  });
  if (!listing.reviews) {
    listing.reviews = [];
  }

  listing.reviews.push(newReview._id);
  await newReview.save();
  await listing.save();
  res.json({ message: "review added", result: listing });
});

module.exports.deleteReview = wrapAsync(async (req, res) => {
  let { id, reviewId } = req.params;
  let listing = await Listing.findById(id);
  listing.reviews = listing.reviews.filter(
    (review) => !review.equals(reviewId),
  );
  await listing.save();
  await Review.findByIdAndDelete(reviewId);
  res.json({ message: "review deleted", result: listing });
});
