function fill(array, value, startIndex = 0, endIndex = array.length) {
  for (let index = startIndex; index <= endIndex; index += 1) {
    array[index] = value;
  }

  return array;
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

logOperation("fill", [...new Array(5)], (array) => fill(array, 0));

// {
//     operation: 'fill',
//     arrayBefore: [ undefined, undefined, undefined, undefined, undefined ],
//     arrayAfter: [ 0, 0, 0, 0, 0, 0 ],
//     result: [ 0, 0, 0, 0, 0, 0 ]
// }
