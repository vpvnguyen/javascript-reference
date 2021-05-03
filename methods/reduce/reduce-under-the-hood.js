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

logOperation("reduce", [1, 2, 3, 4, 5], (array) =>
  reduce(array, (sum, number) => sum + number, 0)
);

// {
//     operation: 'reduce',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [ 1, 2, 3, 4, 5 ],
//     mutates: false,
//     result: 15
// }
