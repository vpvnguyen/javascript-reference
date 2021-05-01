function forEach(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];
    callback(value, index, array);
  }
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

logOperation("forEach", [1, 2, 3, 4, 5], (array) =>
  forEach(array, (value) => console.log(value))
);

// {
//     operation: 'forEach',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [ 1, 2, 3, 4, 5 ],
//     result: undefined
// }
