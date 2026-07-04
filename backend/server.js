const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Listing = require("./models/Listing");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const authRoutes = require("./routes/auth");
const getCoord = require("./utils/geoCoord");

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

app.get("/listings", (req, res) => {
  res.json({ message: "all listings" });
});

app.get("/listings/new", (req, res) => {
  res.json({ message: "new form served" });
});

app.post("/listings", async (req, res) => {
  let {
    owner_name,
    title,
    about,
    avatar,
    profession,
    status,
    availability,
    services,
    location,
  } = req.body;

  let newListing = new Listing({
    title,
    about,
    avatar,
    profession,
    status,
    availability,
    services,
    location,
  });

  let coordinates = await getCoord(location);
  newListing.geometry = {
    type: "Point",
    coordinates: coordinates,
  };
  if (!req.user) {
    return res.json({ message: "go get login" });
  }
  newListing.owner_name = req.user;
  await newListing.save().then((listing) => {
    res.json({ message: "listing created successfully", newListing });
  });
});

// app.use((err, req, res, next) => {
//   res.status(401).json({ message: "faced some error" });
// });

const port = 8080;
app.listen(port, () => {
  console.log("listening");
});
