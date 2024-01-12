// src/app.js
const express = require('express');
const { PORT } = require('./config');

const app = express();

// Middleware
app.use(express.json());

// Routes
const weatherRouter = require('./routes/weatherRouter');
app.use("/weather",weatherRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
