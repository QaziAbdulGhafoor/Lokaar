const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: User }],
});

const Message = new mongoose.model("Message", messageSchema);
module.exports = Message;
