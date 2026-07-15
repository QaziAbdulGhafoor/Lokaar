const mongoose = require("mongoose");
const User = require("../models/User");
const passport = require("passport");

const LocalStrategy = require("passport-local");

module.exports.getLogin = (req, res) => {
  res.json({ message: "login form served" });
};

module.exports.postLogin = (req, res) => {
  res.json({
    message: "welcome back",
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
    res.json({ msg: "success", savedUser });
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
