const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  content: {
    type: String,
    required: true,
  },
});

const Message = new mongoose.model("Message", messageSchema);
module.exports = Message;
