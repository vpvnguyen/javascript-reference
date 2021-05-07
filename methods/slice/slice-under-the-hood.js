function slice(array, startIndex = 0, endIndex = array.length) {
  const result = [];

  for (let index = startIndex; index < endIndex; index += 1) {
    const value = array[index];

    if (index < array.length) {
      result.push(value);
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

logOperation("slice", [1, 2, 3, 4, 5], (array) => slice(array, 1, 3));

// {
//     operation: 'slice',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [ 1, 2, 3, 4, 5 ],
//     result: [ 2, 3 ]
// }
