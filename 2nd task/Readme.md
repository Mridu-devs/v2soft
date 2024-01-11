# Weather Microservice

This is a simple Node.js microservice for retrieving weather details using the [OpenWeatherMap API](https://openweathermap.org/api). The microservice exposes an endpoint that can be queried to get weather information for a specific city.

## Features

- **Weather Details:** Retrieve temperature, humidity, wind speed, and more for a specific city.
- **Configurable:** Easily configure the OpenWeatherMap API key and other parameters.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-microservice.git
Install dependencies:

bash
Copy code
cd weather-microservice
npm install
Set up your API key:

Obtain an API key from OpenWeatherMap.

Create a .env file in the project root and add your API key:

env
Copy code
OPENWEATHERMAP_API_KEY=your_actual_api_key
Run the microservice:

bash
Copy code
npm start
The microservice will be running on http://localhost:3007.

Configuration
API key: Obtain your OpenWeatherMap API key from https://openweathermap.org/api and set it in the .env file.
API Endpoint
GET /weather?city={city_name}
Example: http://localhost:3007/weather?city=London

**Postman Collection Link:**
https://crimson-moon-315146.postman.co/workspace/New-Team-Workspace~a1688465-cd22-4a59-96fc-f582f98f6398/collection/28903093-2859b09a-6f29-48e1-846c-09ba63223a86?action=share&creator=28903093
