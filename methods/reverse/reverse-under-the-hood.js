function reverse(array) {
  const result = [];

  const lastIndex = array.length - 1;

  for (let index = lastIndex; index > -1; index -= 1) {
    const value = array[index];
    result[lastIndex - index] = value;
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

logOperation("reverse", [1, 2, 3, 4, 5], (array) => reverse(array));

// {
//     operation: 'reverse',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [ 1, 2, 3, 4, 5 ],
//     result: [ 5, 4, 3, 2, 1 ]
// }
