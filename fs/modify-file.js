const fs = require("fs");

const modifyFile = () => {
  const weatherData = fs.readFileSync("json/openweather.json");
  const parsedData = JSON.parse(weatherData);
  parsedData.name = "New Name";
  return parsedData;
};

const writeToFile = (data) => {
  const filename = `json/openweather_modified.json`;
  fs.writeFile(filename, data, function (err) {
    if (err) return console.error(err);
    console.log(`Wrote to file: ${filename}`);
  });
};

const execute = () => {
  const data = modifyFile();
  writeToFile(JSON.stringify(data));
};

execute();
