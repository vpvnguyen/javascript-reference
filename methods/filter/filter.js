function push(array, ...values) {
  const { length: arrayLength } = array;
  const { length: valuesLength } = values;

  for (let index = 0; index < valuesLength; index += 1) {
    array[arrayLength + index] = values[index];
  }

  return array.length;
}

function filter(array, callback) {
  const result = [];

  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      // result.push(value)
      push(result, value);
    }
  }

  return result;
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

logOperation("filter", [1, 2, 3, 4, 5], (array) =>
  filter(array, (value) => value >= 2)
);

// {
//     operation: 'filter',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [ 1, 2, 3, 4, 5 ],
//     result: [ 2, 3, 4, 5 ]
// }
