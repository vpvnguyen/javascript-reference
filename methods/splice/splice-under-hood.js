function splice(array, insertAtIndex, removeNumberOfElements, ...values) {
  const firstPart = array.slice(0, insertAtIndex);
  const secondPart = array.slice(insertAtIndex + removeNumberOfElements);

  const removedElements = array.slice(
    insertAtIndex,
    insertAtIndex + removeNumberOfElements
  );

  const joinedParts = firstPart.concat(values, secondPart);
  const { length: joinedPartsLength } = joinedParts;

  for (let index = 0; index < joinedPartsLength; index += 1) {
    array[index] = joinedParts[index];
  }

  array.length = joinedPartsLength;

  return removedElements;
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

logOperation("splice", [1, 2, 3, 4, 5], (array) => splice(array, 1, 3));

// {
//     operation: 'splice',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [ 1, 5 ],
//     result: [ 2, 3, 4 ]
// }
