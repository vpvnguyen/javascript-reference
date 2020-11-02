require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.OPEN_WEATHER_API_KEY}`;

const getRequest = async () => {
  const weatherData = await axios.get(openWeatherUrl);
  return weatherData.data;
};

const writeToFile = (data) => {
  const filename = `openweather.json`;
  fs.writeFile(filename, data, function (err) {
    if (err) return console.error(err);
    console.log(`Wrote to file: ${filename}`);
  });
};

const execute = async () => {
  const weatherData = await getRequest();
  writeToFile(JSON.stringify(weatherData));
};

execute();
