const greet = (str1) => (greet2 = (str2) => `${str1}, ${str2}!`);

// https://www.sitepoint.com/currying-in-functional-javascript/
const car = (manufacturer) => (year) => (model) =>
  console.log(manufacturer, year, model);

car("nissan")("1987")("240sx");
car("nissan")("1987")("");
car("nissan")("")("");
car("nissan")(null)("240sx");
