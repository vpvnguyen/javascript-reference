function push(array, ...values) {
  const { length: arrayLength } = array;
  const { length: valuesLength } = values;

  for (let index = 0; index < valuesLength; index += 1) {
    array[arrayLength + index] = values[index];
  }

  return array.length;
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

logOperation("push", [1, 2, 3, 4, 5], (array) => push(array, 6, 7));

// {
//     operation: 'push',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [1, 2, 3, 4, 5, 6, 7],
//     result: 7
// }
