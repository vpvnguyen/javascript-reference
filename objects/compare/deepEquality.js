const object1 = {
  name: "vince",
  age: 32,
  job: {
    title: "dev",
    company: "abc",
  },
};

const object2 = {
  name: "vince",
  age: 32,
  job: {
    title: "dev",
    company: "abc",
  },
};

const logProperty = (property) => JSON.stringify(property, null, 2);

const isObject = (object) => object != null && typeof object === " object";

const deepEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    console.log("Length is not equal");
  }

  keys1.forEach((key) => {
    const val1 = object1[key];
    const val2 = object2[key];

    const areObjects = isObject(val1) && isObject(val2);

    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      console.log("objects are not equal");
      console.log(logProperty(val1), logProperty(val2));
    }
  });
};

deepEqual(object1, object2);
