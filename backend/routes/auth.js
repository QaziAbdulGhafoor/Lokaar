const mongoose = require("mongoose");
const User = require("../models/User");
const passport = require("passport");
const express = require("express");
const router = express.Router();
const LocalStrategy = require("passport-local");

router
  .route("/login")
  .get((req, res) => {
    res.json({ message: "login form served" });
  })
  .post(passport.authenticate("local"), (req, res) => {
    res.json({
      message: "welcome back",
    });
  });

router
  .route("/signup")
  .get((req, res) => {
    res.json({ message: "success serving sign up" });
  })
  .post(async (req, res) => {
    let { username, email, password, category, location, avatar } = req.body;
    let newUser = new User({ username, email, category, location, avatar });
    let savedUser = await User.register(newUser, password);

    req.logIn(savedUser, (err) => {
      if (err) {
        res.json({ error: "some error" });
      }
      res.json({ msg: "success", savedUser });
    });
  });

router.post("/logout", function (req, res, next) {
  if (req.user) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.json({ message: "logout successful" });
    });
  } else {
    res.json({ message: "you are not even logged in" });
  }
});

module.exports = router;
