const fs = require("fs");

const appendProp = () => {
  const weatherData = fs.readFileSync("json/openweather.json");
  const parsedData = JSON.parse(weatherData);
  parsedData["prop"] = "prop";
  return parsedData;
};

const writeToFile = (data) => {
  const filename = `json/openweather_append.json`;
  fs.writeFile(filename, data, function (err) {
    if (err) return console.error(err);
    console.log(`Wrote to file: ${filename}`);
  });
};

const execute = () => {
  const data = appendProp();
  writeToFile(JSON.stringify(data));
};

execute();
