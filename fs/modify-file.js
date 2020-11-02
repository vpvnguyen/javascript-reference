const fs = require("fs");

const weatherData = fs.readFileSync("openweather.json");
const parsedData = JSON.parse(weatherData);
console.log(parsedData);
console.log(parsedData.coord);
