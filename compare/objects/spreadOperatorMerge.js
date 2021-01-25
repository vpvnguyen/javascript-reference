const object1 = {
  prop1: "prop1-DEFAULT",
  prop2: {
    name2: "prop2-DEFAULT",
    desc2: "desc-DEFAULT",
  },
  prop3: {
    name3: "prop3-DEFAULT",
    desc3: "prop3-DEFAULT",
  },
  prop4: {
    name4: "prop4-DEFAULT",
    desc4: "prop4-DEFAULT",
  },
};

const object2 = {
  prop1: "prop1-NEW",
  prop2: {
    name2: "prop2-NEW",
  },
  prop3: {
    desc3: "prop3-NEW",
  },
};

const mergeObjects = (targetObject, sourceObject) => ({
  ...targetObject,
  ...sourceObject,
});

const mergeObjectsFirstChildren = (targetObject, sourceObject) => {
  const targetEntries = Object.entries(targetObject);

  targetEntries.map(([targetKey, targetValue]) => {
    if (typeof targetValue === "object") {
      targetObject[targetKey] = {
        ...targetValue,
        ...sourceObject[targetKey],
      };
    } else {
      targetObject[targetKey] = sourceObject[targetKey];
    }
  });

  return targetObject;
};

const mergedObject = mergeObjects(object1, object2);
console.log("mergedObject: ", mergedObject);
const mergedObjectsFirstChildren = mergeObjectsFirstChildren(
  object1,
  mergedObject
);
console.log("mergedObjectsFirstChildren: ", mergedObjectsFirstChildren);
