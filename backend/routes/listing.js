const express = require("express");
const router = express.Router();
const middlewares = require("../middleware/middleware");
const listingController = require("../controllers/listing");

router
  .route("/")
  .get(listingController.getAll)

  .post(middlewares.isLoggedIn, listingController.postNew);

router.get("/new", middlewares.isLoggedIn, listingController.getNew);

router
  .route("/:id")
  .get(listingController.detailedListing)
  .put(middlewares.isLoggedIn, middlewares.isOwner, listingController.putEdit)

  .delete(
    middlewares.isLoggedIn,
    middlewares.isOwner,
    listingController.deleteListing,
  );

router.get(
  "/:id/edit",
  middlewares.isLoggedIn,
  middlewares.isOwner,
  listingController.getEdit,
);

router
  .route("/:id/favourites")
  .post(middlewares.isLoggedIn, listingController.addFav)
  .delete(listingController.removeFav);

module.exports = router;
