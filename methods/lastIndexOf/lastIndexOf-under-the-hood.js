function lastIndexOf(array, searchedValue) {
  for (let index = array.length - 1; index > -1; index -= 1) {
    const value = array[index];

    if (value === searchedValue) {
      return index;
    }
  }

  return -1;
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

logOperation("lastIndexOf", [1, 2, 3, 4, 5, 3], (array) =>
  lastIndexOf(array, 3)
);

// {
//     operation: 'lastIndexOf',
//     arrayBefore: [ 1, 2, 3, 4, 5, 3 ],
//     arrayAfter: [ 1, 2, 3, 4, 5, 3 ],
//     result: 5
// }
