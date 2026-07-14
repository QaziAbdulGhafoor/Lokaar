const express = require("express");
const router = express.Router({ mergeParams: true });
const middlewares = require("../middleware/middleware");
const reviewController = require("../controllers/review");

router.post("/", middlewares.isLoggedIn, reviewController.postReview);

router.delete(
  "/:reviewId",
  middlewares.isRevOwner,
  reviewController.deleteReview,
);
module.exports = router;
