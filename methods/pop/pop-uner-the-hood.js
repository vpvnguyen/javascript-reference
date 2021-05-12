function pop(array) {
  const value = array[array.length - 1];

  array.length = array.length - 1;

  return value;
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

logOperation("pop", [1, 2, 3, 4, 5], (array) => pop(array));

// {
//   operation: 'pop',
//   arrayBefore: [ 1, 2, 3, 4, 5 ],
//   arrayAfter: [ 1, 2, 3, 4 ],
//   result: 5
// }
