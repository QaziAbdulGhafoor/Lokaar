const mongoose = require("mongoose");
const User = require("../models/User");
const passport = require("passport");

const LocalStrategy = require("passport-local");

module.exports.getLogin = (req, res) => {
  res.json({ message: "login form served" });
};

module.exports.postLogin = (req, res) => {
  res.json({
    user: {
      id: req.user._id,
      username: req.user.username,
      category: req.user.category,
      location: req.user.location,
      avatar: req.user.avatar,
    },
  });
};

module.exports.getSignup = (req, res) => {
  res.json({ message: "success serving sign up" });
};

module.exports.postSignup = async (req, res) => {
  let { username, email, password, category, location, avatar } = req.body;
  let newUser = new User({ username, email, category, location, avatar });
  let savedUser = await User.register(newUser, password);

  req.logIn(savedUser, (err) => {
    if (err) {
      res.json({ error: "some error" });
    }
    res.json({
      id: savedUser._id,
      username: savedUser.username,
      category: savedUser.category,
      location: savedUser.location,
      avatar: savedUser.avatar,
    });
  });
};

module.exports.logout = (req, res, next) => {
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
};

module.exports.getUser = (req, res) => {
  // if (req.user) {
  //   let user = {
  //     id: req.user._id,
  //     username: req.user.username,
  //     category: req.user.category,
  //   };
  //   res.status(200).json({ message: "user found", user: user });
  // } else {
  //   res.status(404).json({ message: "user not found" });
  // }
  console.log("Time:", new Date().toISOString());
  console.log("SESSION:", req.session);
  console.log("USER:", req.user);
  console.log("AUTHENTICATED:", req.isAuthenticated());
  res.json({
    session: req.session,
    user: req.user || null,
    authenticated: req.isAuthenticated(),
  });
};
