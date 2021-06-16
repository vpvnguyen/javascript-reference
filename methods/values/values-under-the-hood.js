function values(array) {
  const { length } = array;

  function* createGenerator() {
    for (let index = 0; index < length; index += 1) {
      const value = array[index];
      yield value;
    }
  }

  return createGenerator();
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

const valuesGenerator = values([1, 2, 3, 4, 5]);

valuesGenerator.next(); // { value: 1, done: false }

// First, we define the createGenerator function.
// In it, we iterate over the array and yield each value.
