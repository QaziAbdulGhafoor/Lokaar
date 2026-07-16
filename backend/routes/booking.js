const express = require("express");
const router = express.Router({ mergeParams: true });
const middlewares = require("../middleware/middleware");
const bookingController = require("../controllers/booking");

router.get("/:id", middlewares.isLoggedIn, bookingController.getBookForm);

router.post("/:id", bookingController.postBookForm);

router.get("/:bookingId", bookingController.getEdit);

router.put("/:bookingId", middlewares.isLoggedIn, bookingController.postEdit);

router.delete("/:bookingId", bookingController.deleteBooking);
module.exports = router;
