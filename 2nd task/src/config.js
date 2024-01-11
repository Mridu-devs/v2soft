// src/config.js
require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3007,
  OPENWEATHERMAP_API_KEY: process.env.OPENWEATHERMAP_API_KEY,
};
