const fs = require("fs");

const appendPropToArray = () => {
  const data = fs.readFileSync("json/cases.json");
  const parsedData = JSON.parse(data);

  parsedData.cases.map((value, index) => {
    value["prop"] = "prop";
  });

  return parsedData;
};

const writeToFile = (data) => {
  const filename = `json/cases_append.json`;
  fs.writeFile(filename, data, function (err) {
    if (err) return console.error(err);
    console.log(`Wrote to file: ${filename}`);
  });
};

const execute = () => {
  const data = appendPropToArray();
  writeToFile(JSON.stringify(data));
};

execute();
