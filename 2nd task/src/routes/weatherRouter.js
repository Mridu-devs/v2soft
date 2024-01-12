// routes/authRoutes.js
const express = require("express");
const weatherRouter = express.Router();
const { alldetails,onlyTemperature } = require("../controllers/weatherController");

weatherRouter.get("/alldetails", alldetails);
weatherRouter.get("/temperature", onlyTemperature);

module.exports = weatherRouter;