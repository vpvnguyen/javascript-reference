const array = [
  "1 1 E",
  "RFRFRFRF",
  "3 2 N",
  "FRRFLLFFRRFLL",
  "0 3 W",
  "LLFFFLFLFL",
];

const chunked = (array) => {
  const chunkedArray = [];
  const chunk = 2;
  for (let i = 0; i < array.length; i += chunk) {
    if (i % 2 === 0) {
      // validate of instructions are too long
      if (array[i].length > 7 || array[i].length < 5) {
        throw new Error(`Invalid robot position!`);
      }

      const newerArr = array[i].split(" ");
      console.log(newerArr);
    }

    chunkedArray.push(array.slice(i, i + chunk));
  }
  return chunkedArray;
};

const chunked2 = (array) => {
  //   const chunkedArray = [];
  //   const chunk = 2;
  const robotCommands = [];
  const robotPositions = [];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i], array[i].length);

    const object = {};

    if (i % 2 === 0) {
      // validate of instructions are too long
      console.log("true", array[i], array[i].length);
      if (array[i].length > 7 || array[i].length < 5) {
        throw new Error(`Invalid robot position!`);
      }

      //   validate of coordinate is over 50
      const newerArr = array[i].split(" ");
      console.log("newerArr", newerArr);

      // if ()
    }
  }
};

// console.log(chunked(array));

const validateMaxCoordinate = (value) => {
  const MAX_COORDINATE = 50;
  if (value > MAX_COORDINATE)
    throw new Error(`Max allowed coordinate is ${MAX_COORDINATE}`);

  return value;
};

const validateOrientation = (value) => {
  const validOrientation = ["N", "E", "S", "W"];
  if (!validOrientation.includes(value)) throw new Error(`Wrong orientation!`);

  return value;
};

const validateCommands = (value) => {
  const validCommands = ["L", "R", "F"];

  if (value.split("").some((element) => !validCommands.includes(element)))
    throw new Error(`Invalid Commands!`);

  return value;
};

const getRobotPositions = (array) => {
  const robotCoordinates = array.filter((element, index) => index % 2 === 0);
  const robotMoveCommands = array.filter((element, index) => index % 2 !== 0);

  console.log(robotCoordinates);
  console.log(robotMoveCommands);
  const robotPositions = robotCoordinates.map((element, index) => {
    const splitCoordinates = element.split(" ");
    return {
      xPos: validateMaxCoordinate(splitCoordinates[0]),
      yPos: validateMaxCoordinate(splitCoordinates[1]),
      orientation: validateOrientation(splitCoordinates[2]),
      commands: validateCommands(robotMoveCommands[index]),
    };
  });
  console.log(robotPositions);
};

getRobotPositions(array);

console.log(!isNaN(Number("1")));
