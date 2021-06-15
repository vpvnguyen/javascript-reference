// The entries method returns a generator that yields index-value pairs.

function entries(array) {
  const { length } = array;

  function* createGenerator() {
    for (let index = 0; index < length; index += 1) {
      const value = array[index];
      yield [index, value];
    }
  }

  return createGenerator();
}

const entriesGenerator = entries([1, 2, 3, 4, 5]);

entriesGenerator.next(); // { value: [0, 1], done: false }
