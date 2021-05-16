function concat(array, ...values) {
  const result = [...array];
  const { length } = values;

  for (let index = 0; index < length; index += 1) {
    const value = values[index];

    if (Array.isArray(value)) {
      push(result, ...value);
    } else {
      push(result, value);
    }
  }

  return result;
}

function push(array, ...values) {
  const { length: arrayLength } = array;
  const { length: valuesLength } = values;

  for (let index = 0; index < valuesLength; index += 1) {
    array[arrayLength + index] = values[index];
  }

  return array.length;
}

function reduce(array, callback, initValue) {
  const { length } = array;

  let acc = initValue;
  let startAtIndex = 0;

  if (initValue === undefined) {
    acc = array[0];
    startAtIndex = 1;
  }

  for (let index = startAtIndex; index < length; index += 1) {
    const value = array[index];
    acc = callback(acc, value, index, array);
  }

  return acc;
}

function flat(array, depth = 0) {
  if (depth < 1 || !Array.isArray(array)) {
    return array;
  }

  return reduce(
    array,
    (result, current) => {
      return concat(result, flat(current, depth - 1));
    },
    []
  );
}

function logOperation(operationName, array, callback) {
  const input = [...array];
  const result = callback(array);

  console.log({
    operation: operationName,
    arrayBefore: input,
    arrayAfter: array,
    result,
  });
}

logOperation("flat", [1, 2, 3, [4, 5, [6]]], (array) => flat(array, 2));
