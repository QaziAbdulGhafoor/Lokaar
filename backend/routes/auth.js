const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router
  .route("/login")
  .get(authController.getLogin)
  .post(authController.postLogin);

router
  .route("/signup")
  .get(authController.getSignup)
  .post(authController.postSignup);

router.post("/logout", authController.logout);

module.exports = router;
