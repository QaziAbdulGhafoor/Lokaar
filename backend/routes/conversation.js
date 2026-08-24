const express = require("express");
const router = express.Router();
const middlewares = require("../middleware/middleware");
const Conversation = require("../models/Conversation");

router.get("/", middlewares.isLoggedIn, async (req, res) => {
  const conversations = await Conversation.find({
    participants: { $all: req.user.id },
  }).populate("participants");
  console.log(conversations);
  res.json({ conversations });
});

module.exports = router;
