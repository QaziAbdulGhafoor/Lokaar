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
      favourites: req.user.favourites,
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
      user: {
        id: savedUser._id,
        username: savedUser.username,
        category: savedUser.category,
        location: savedUser.location,
        favourites: savedUser.favourites,
      },
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
  res.json({
    user: {
      id: req.user.id,
      username: req.user.username,
      category: req.user.category,
      location: req.user.location,
      avatar: req.user.avatar,
      favourites: req.user.favourites,
    },
  });
};
