const manufacturer = (manufacturer) =>
  (year = (year) =>
    (model = (model) => console.log(`${manufacturer} | ${year} | ${model}!`)));

const car = (manufacturer) => (year) => (model) =>
  console.log(manufacturer, year, model);

car("nissan")("1987")("240sx");
car("nissan")("1987")("");
car("nissan")("")("");
car("nissan")(null)("240sx");

manufacturer("toyota")("1986")("corolla");
manufacturer("toyota")("1986"); // no output
manufacturer("toyota"); // no output
manufacturer("toyota")(null)("corolla");
