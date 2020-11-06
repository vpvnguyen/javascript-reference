const isItNull = null;
const isItUndefined = undefined;
const isTrue = true;
const isString = "string";
const isNum = 10;

const checkType = (arg, arg2) => {
  if (arg === null && arg2 === null)
    return console.log(`null: ${arg}, ${arg2}`);

  if (arg === undefined && arg2 == undefined)
    return console.log(`undefined: ${arg1}, ${arg2}`);

  if (arg === null || arg === undefined || arg2 === null || arg2 === undefined)
    return console.log(`catch null || undefined: ${arg}, ${arg2}`);

  if (arg instanceof String) return console.log(`string: ${arg}`);

  if (!isNaN(arg)) return console.log(`number: ${arg}`);

  if (typeof arg === "boolean") return console.log(`boolean: ${arg}`);

  return console.log(`Not sure, ${arg}`);
};

checkType(isNum, isString);
