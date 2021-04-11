const generateCoordinates = (WIDTH, HEIGHT) => {
  const coordinates = [];
  for (let i = 0; i < WIDTH; i++) {
    for (let j = 0; j < HEIGHT; j++) {
      coordinates.push({ x: i, y: j });
    }
  }
  console.log(coordinates);
  return coordinates;
};

const sectionArrays = (coordinates, HEIGHT) => {
  const arrays = [];
  while (coordinates.length > 0) {
    arrays.push(coordinates.splice(0, HEIGHT).reverse());
  }
  return [...arrays];
};

// const
const WIDTH = 5;
const HEIGHT = 6;

const coordinates = generateCoordinates(WIDTH, HEIGHT);

const sectionedArrays = sectionArrays(coordinates, HEIGHT);

console.log(sectionedArrays);

// [ 05, 15, 25, 35, 45 ]
// [ 04, 14, 24, 34, 44 ]
// [ 03, 13, 23, 33, 43 ]
// [ 02, 12, 22, 32, 42 ]
// [ 01, 11, 21, 31, 41 ]
// [ 00, 10, 20, 30, 40 ]
