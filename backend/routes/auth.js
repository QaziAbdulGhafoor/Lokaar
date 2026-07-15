const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/auth");

router
  .route("/login")
  .get(authController.getLogin)
  .post(passport.authenticate("local"), authController.postLogin);

router
  .route("/signup")
  .get(authController.getSignup)
  .post(authController.postSignup);

router.post("/logout", authController.logout);

module.exports = router;
