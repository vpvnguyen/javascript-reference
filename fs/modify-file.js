const fs = require("fs");

const weatherData = fs.readFileSync("openweather.json");
const parsedData = JSON.parse(weatherData);
parsedData.name = "New Name";

const writeToFile = (data) => {
  const filename = `openweather_modified.json`;
  fs.writeFile(filename, data, function (err) {
    if (err) return console.error(err);
    console.log(`Wrote to file: ${filename}`);
  });
};

writeToFile(JSON.stringify(parsedData));

console.log(parsedData);
console.log(parsedData.name);
