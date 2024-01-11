// src/services/weatherService.js
const axios = require('axios');
const { OPENWEATHERMAP_API_KEY } = require('../config');

const getWeatherData = async (city = 'London') => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERMAP_API_KEY}`;
    const response = await axios.get(apiUrl);
    console.log("resppp",response)
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

module.exports = {
  getWeatherData,
};
