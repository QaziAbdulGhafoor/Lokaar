require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Listing = require("./models/Listing");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const authRoutes = require("./routes/auth");
const listingRoutes = require("./routes/listing");
const reviewRoutes = require("./routes/review");
const bookingRoutes = require("./routes/booking");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const DB_URL = process.env.ATLAS_URI;

async function main() {
  await mongoose.connect(DB_URL);
}

main().then(() => {
  console.log("cloud db connected successfully");
});

const sessionMiddleware = session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", authRoutes);
app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);
app.use("/booking", bookingRoutes);

const port = 3000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.use((socket, next) => {
  sessionMiddleware(socket.request, {}, next);
});

io.use((socket, next) => {
  passport.initialize()(socket.request, {}, () => {
    passport.session()(socket.request, {}, next);
  });
});

io.on("connection", (socket) => {
  console.log("your socket id is ", socket.id, socket.request.user);
  socket.on("mymessage", (message) => {
    console.log(message);
  });
});

server.listen(port, () => {
  console.log("listening to server");
});
