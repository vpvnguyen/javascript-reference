function findIndex(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      return index;
    }
  }

  return -1;
}

function find(array, callback) {
  const index = findIndex(array, callback);

  if (index === -1) {
    return undefined;
  }

  return array[index];
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

logOperation("find", [1, 2, 3, 4, 5], (array) =>
  find(array, (number) => number === 3)
);

// {
//     operation: 'find',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [ 1, 2, 3, 4, 5 ],
//     result: 3
// }
