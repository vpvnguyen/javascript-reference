class GridConstructor {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.array1 = new Array(x);
    this.coordinates = new Array(this.x, this.y);
  }

  static getX = () => {
    return console.log(this.x);
  };

  static getY = () => {
    return console.log(this.y);
  };

  getCoordinates = () => {
    return this.coordinates;
  };

  getArray1 = () => {
    return this.array1;
  };
}

const createGrid = () => {
  const grid = [];

  const rows = 5;
  const cols = 5;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      grid.push({
        row,
        col,
      });
    }
  }

  console.log(grid);
};

// createGrid();

const newGrid = new GridConstructor(1, 2);

console.log(newGrid.getCoordinates());
console.log(newGrid.getArray1());

// const array = [
//     [{ x: 0, y: 2 }, {x:1, y:2}, {x:2, y:2}],
//     [{ x: 0, y: 1 }, {x:1, y:1}, {x:2, y:1}],
//     [{ x: 0, y: 0 }, {x:1, y:0}, {x:2, y:0}],
// ];
