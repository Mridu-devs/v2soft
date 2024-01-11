// src/app.js
const express = require('express');
const weatherController = require('./controllers/weatherController');
const { PORT } = require('./config');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(weatherController);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
