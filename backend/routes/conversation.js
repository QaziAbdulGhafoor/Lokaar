const express = require("express");
const router = express.Router();
const middlewares = require("../middleware/middleware");
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

router.get("/", middlewares.isLoggedIn, async (req, res) => {
  const conversations = await Conversation.find({
    participants: { $all: req.user.id },
  }).populate("participants");
  console.log(conversations);
  res.json({ conversations });
});

router.get("/:id", middlewares.isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const messages = await Message.find({ conversation: id });
  const conversation = await Conversation.findById(id).populate("participants");
  const partner = conversation.participants.filter(
    (participant) => participant._id.toString() !== req.user.id,
  )[0];
  res.json({ messages, partner });
});

module.exports = router;
