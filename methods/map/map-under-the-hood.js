function map(array, callback) {
  const result = [];
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    result[index] = callback(value, index, array);
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

logOperation("map", [1, 2, 3, 4, 5], (array) =>
  map(array, (value) => value + 5)
);

// {
//     operation: 'map',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [ 1, 2, 3, 4, 5 ],
//     result: [ 6, 7, 8, 9, 10 ]
// }
