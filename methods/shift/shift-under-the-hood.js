function shift(array) {
  const { length } = array;
  const firstValue = array[0];

  for (let index = 1; index < length; index += 1) {
    const value = array[index];
    array[index - 1] = value;
  }

  array.length = length - 1;

  return firstValue;
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

logOperation("shift", [1, 2, 3, 4, 5], (array) => shift(array));

// {
//     operation: 'shift',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [ 2, 3, 4, 5 ],
//     result: 1
// }
