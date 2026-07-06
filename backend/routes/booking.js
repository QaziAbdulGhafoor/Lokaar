const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/Listing");
const getCoord = require("../utils/geoCoord");
const middlewares = require("../middleware/middleware");
const Booking = require("../models/Booking");
