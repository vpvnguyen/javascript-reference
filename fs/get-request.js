require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

const openWeatherUrl = (apiKey) =>
  `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;

const getRequest = async () => {
  const openWeatherRequestUrl = openWeatherUrl(
    process.env.OPEN_WEATHER_API_KEY
  );

  const weatherData = await axios.get(openWeatherRequestUrl);
  return weatherData.data;
};

const writeToFile = (data) => {
  const filename = `openweather.json`;
  fs.writeFile(filename, data, function (err) {
    if (err) return console.log(err);
    console.log(`Wrote to file: ${filename}`);
  });
};

const execute = async () => {
  const weatherData = await getRequest();
  writeToFile(JSON.stringify(weatherData));
};

execute();
