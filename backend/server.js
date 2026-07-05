const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Listing = require("./models/Listing");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const authRoutes = require("./routes/auth");
const listingRoutes = require("./routes/listing");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const DB_URL = "mongodb://127.0.0.1:27017/Lokaar";

async function main() {
  await mongoose.connect(DB_URL);
}

main().then(() => {
  console.log("db connected successfully");
});

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", authRoutes);
app.use("/listings", listingRoutes);

const port = 8080;
app.listen(port, () => {
  console.log("listening");
});
