const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    enum: ["provider", "customer"],
    required: true,
  },
  location: { type: String, required: true },
  favourites: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

module.exports = User;
