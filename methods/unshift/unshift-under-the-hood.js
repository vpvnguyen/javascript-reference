function concat(array, ...values) {
  const result = [...array];
  const { length } = values;

  for (let index = 0; index < length; index += 1) {
    const value = values[index];

    if (Array.isArray(value)) {
      result.push(...value);
    } else {
      result.push(value);
    }
  }

  return result;
}

function unshift(array, ...values) {
  const mergedArrays = concat(values, ...array);
  const { length: mergedArraysLength } = mergedArrays;

  for (let index = 0; index < mergedArraysLength; index += 1) {
    const value = mergedArrays[index];
    array[index] = value;
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

logOperation("unshift", [1, 2, 3, 4, 5], (array) => unshift(array, 0));

// {
//     operation: 'unshift',
//     arrayBefore: [ 1, 2, 3, 4, 5 ],
//     arrayAfter: [ 0, 1, 2, 3, 4, 5 ],
//     result: 6
// }
