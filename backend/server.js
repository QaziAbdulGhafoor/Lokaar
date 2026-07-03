const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");

const app = express();

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

app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const port = 8080;
app.listen(port, () => {
  console.log("listening");
});

app.get("/signup", (req, res) => {
  res.json({ name: "success" });
});

app.post("/signup", async (req, res) => {
  let { username, email, password } = req.body;
  let newUser = new User({ username, email });
  let savedUser = await User.register(newUser, password);

  req.logIn(savedUser, (err) => {
    if (err) {
      res.json({ error: "some error" });
    }
    res.json({ msg: "success", savedUser });
  });
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    message: "welcome back",
  });
});
