const WIDTH = 5;
const HEIGHT = 6;

const createRows = (HEIGHT) => {
  const array = [];
  for (let i = 0; i < HEIGHT; i++) {
    array.push(i);
  }
  console.log(array);
  return array;
};

createRows(HEIGHT);

console.time("time");

const createNArrays = (HEIGHT) => {
  const arrays = new Array(HEIGHT);
  console.log(arrays);
  return arrays;
};

createNArrays(HEIGHT);
console.timeEnd("time");
// [ 05, 15, 25, 35, 45 ]
// [ 04, 14, 24, 34, 44 ]
// [ 03, 13, 23, 33, 43 ]
// [ 02, 12, 22, 32, 42 ]
// [ 01, 11, 21, 31, 41 ]
// [ 00, 10, 20, 30, 40 ]
