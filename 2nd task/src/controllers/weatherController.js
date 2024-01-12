const { getWeatherData } = require("../services/weatherService");


const alldetails = async (req, res) => {
  try {
    const city = req.query.city || "London";
    const weatherData = await getWeatherData(city);

    res.json(weatherData);
  } catch (error) {
    console.error("Error in weatherController:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const onlyTemperature = async (req, res) => {
  try {
    const city = req.query.city || "London";
    const { main } = await getWeatherData(city);

    const weatherReport = {
      currentTemperature: (main.temp - 273.15).toFixed(2) + "°C",
      feels: (main.feels_like - 273.15).toFixed(2) + "°C",
      min: (main.temp_min - 273.15).toFixed(2) + "°C",
      max: (main.temp_max - 273.15).toFixed(2) + "°C",
    };

    res.json(weatherReport);
  } catch (error) {
    console.error("Error in weatherController:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = { alldetails,onlyTemperature };
