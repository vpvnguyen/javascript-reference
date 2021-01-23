const object1 = {
  prop1: "prop1-DEFAULT",
  prop2: {
    name: "prop2-DEFAULT",
    desc: "desc-DEFAULT",
  },
  prop3: {
    name: "prop3-DEFAULT",
    desc: "prop3-DEFAULT",
  },
  prop4: {
    name: "prop4-DEFAULT",
    desc: "prop4-DEFAULT",
  },
};

const object2 = {
  prop1: "prop1-NEW",
  prop2: {
    name: "prop2-NEW",
  },
  prop3: {
    desc: "prop3-NEW",
  },
};

const replaceWithNew = (object1, object2) => {
  const object1entries = Object.entries(object1);
  const object2entries = Object.entries(object2);

  const newKey = Object.keys(object2);

  let newObject = {};
  object2entries.forEach(([key, value]) => {
    console.log("");
    console.log("default");
    console.log("key", key);
    // console.log("value", value);
    console.log("object1[key]", object1[key]);
    console.log("");
    console.log("new");
    console.log("key", newKey);
    console.log("object2[key]", object2[key]);
    if (object1.hasOwnProperty(key)) {
      console.log("MATCH");
      //   newArray.push({ [key]: value });
      newObject = {
        ...newObject,
        [key]: value,
      };
    }

    console.log("");
  });

  console.log("newObject", newObject);
};

const replace = (object1, object2) => {
  const newObject = {
    ...object1,
    ...object2,
  };

  console.log("replace");
  console.log(newObject);
};

replaceWithNew(object1, object2);
replace(object1, object2);
