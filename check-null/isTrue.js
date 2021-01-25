// will evaluate to true if value is not:

// null
// undefined
// NaN
// empty string ("")
// 0
// false

const isNull = (x) => x == null;
const isUndefined = (x) => x == undefined;
const isNaN = (x) => !Number(character);
const isEmptyString = (x) => x === "";
const isNumFalse = (x) => x == 0;
const isBoolFalse = (x) => x == false;

const isTruthy = (x) => {
  if (isNull(x)) return console.log("null");
  if (isUndefined(x)) return console.log("undefined");
  if (isNumber(x)) return console.log("NaN");
};
