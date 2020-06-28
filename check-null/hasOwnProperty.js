const object = {
  prop1: "string",
  prop2: 1,
  prop3: null,
};

const hasProp1 = object.hasOwnProperty("prop1");
const hasProp4 = object.hasOwnProperty("prop4");

console.log(hasProp1); // true
console.log(hasProp4); // false
