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

const logProperty = (object, key) => JSON.stringify(object[key], null, 2);

const shallowEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return console.log("Length is not equal");

  keys1.forEach((key) => {
    if (object1[key] !== object2[key])
      console.log(
        `${key}: ${logProperty(object1, key)} !== ${logProperty(object2, key)}`
      );

    console.log(
      `${key}: ${logProperty(object1, key)} === ${logProperty(object2, key)}`
    );
  });
};

shallowEqual(object1, object2);
