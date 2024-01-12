// src/controllers/weatherController.js
const express = require('express');
const { getWeatherData } = require('../services/weatherService');

const router = express.Router();

router.get('/weather', async (req, res) => {
  try {
    const city = req.query.city || 'London';
    const weatherData = await getWeatherData(city);
    
    res.json(weatherData);
  } catch (error) {
    console.error('Error in weatherController:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
