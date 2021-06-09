// The keys method returns a generator that yields indices of an array.

function keys(array) {
  function* createGenerator() {
    const { length } = array;

    for (let index = 0; index < length; index += 1) {
      yield index;
    }
  }

  return createGenerator();
}

const keysGenerator = keys([1, 2, 3, 4, 5]);

keysGenerator.next(); // { value: 0, done: false }

// we iterate over the array and yield each index.
