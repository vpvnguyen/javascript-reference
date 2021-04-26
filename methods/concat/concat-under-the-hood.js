function push(array, ...values) {
  const { length: arrayLength } = array;
  const { length: valuesLength } = values;

  for (let index = 0; index < valuesLength; index += 1) {
    array[arrayLength + index] = values[index];
  }

  return array.length;
}

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

logOperation("concat", [1, 2, 3, 4, 5], (array) => concat(array, 1, 2, [3, 4]));

// {
//     operation: 'concat',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [ 1, 2, 3, 4, 5 ],
//     result: [1, 2, 3, 4, 5, 1, 2, 3, 4]
// }
