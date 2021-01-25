const defaultObject = {
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
  prop5: "prop5-DEFAULT",
  prop6: 6,
  prop7: "7",
};

const objectWithNewProperties = {
  prop1: "prop1-NEW",
  prop2: undefined,
  prop3: {
    name3: "prop3-NEW",
  },
  prop4: {
    desc4: "prop4-NEW",
  },
  prop5: {
    name5: "prop5-NEW",
  },
  prop6: {
    number: 6,
  },
  prop7: 7,
};

const mergeObjectsFirstChildren = (targetObject, sourceObject) => {
  const targetEntries = Object.entries(targetObject);

  targetEntries.map(([targetKey, targetValue]) => {
    if (
      typeof targetObject[targetKey] &&
      typeof sourceObject[targetKey] === "string"
    ) {
      targetObject[targetKey] = sourceObject[targetKey];
    }

    if (
      typeof targetObject[targetKey] &&
      typeof sourceObject[targetKey] !== "string" &&
      typeof targetObject[targetKey] === typeof sourceObject[targetKey]
    ) {
      targetObject[targetKey] = {
        ...targetValue,
        ...sourceObject[targetKey],
      };
    }

    targetObject[targetKey] = targetObject[targetKey];
  });

  return targetObject;
};

const mergedParentObject = mergeObjectsFirstChildren(
  defaultObject,
  objectWithNewProperties
);
console.log("mergedParentObject: ", mergedParentObject);
