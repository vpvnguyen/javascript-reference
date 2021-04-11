import { useState } from "react";

const filterInstructions = (instructions: any) => {
  const filtered = instructions.filter((instruction: any) => instruction);
  console.log(filtered);
  return filtered;
};

const interpretInstructions = (instructions: any) => {
  console.log(instructions);
  const split = instructions.trim().split("\n");
  console.log(split);
  const filtered = filterInstructions(split);
  const trimmed = filtered.map((instruction: any) => instruction.trim());
  console.log(trimmed);
  return trimmed;
};

const mapInstructions = (instructions: any) => ({
  dimensions: instructions.shift(),
  commands: instructions,
});

const validateDimensions = (dimensions: any) => {
  const dimensionArray = dimensions.split(" ");
  console.log(dimensionArray);
  const trimmed = filterInstructions(dimensionArray);
  if (Array.isArray(trimmed) && trimmed.length === 2) {
    // 12e3 = 12000, cant use Number()
    // console.log(height);
    console.log(!isNaN(trimmed[0]));
    console.log(!isNaN(trimmed[1]));
    console.log(Number(trimmed[0]));
    console.log(Number(trimmed[1]));
    console.log(Number(trimmed[0]) <= 50);

    if (
      !isNaN(trimmed[0]) &&
      !isNaN(trimmed[1]) &&
      Number(trimmed[0]) <= 50 &&
      Number(trimmed[1]) <= 50
    ) {
      return {
        width: trimmed[0],
        height: trimmed[1],
      };
    }
  }

  throw new Error("Not valid dimensions!");
};

const InstructionsForm = () => {
  const [instructions, setInstructions] = useState("");

  const formValidation = () => {
    console.log("validate");
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    try {
      // validate
      const interpreted = interpretInstructions(instructions);
      const mapped = mapInstructions(interpreted);
      console.log(mapped);
      const dimensions = validateDimensions(mapped.dimensions);
      console.log(dimensions);

      // create grid
      // send instructions to robot
    } catch (error) {
      console.error("error:", error);
    }
  };

  const handleChange = (event: any) => {
    setInstructions(event.target.value);
  };

  return (
    <div className="w-full p-10">
      <label htmlFor="instructions">Instructions:</label>
      <textarea
        className="p-4 placeholder-blueGray-300 text-blueGray-600 bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
        rows={10}
        name="instructions"
        value={instructions}
        onChange={handleChange}
      />
      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

const App = () => {
  const HEIGHT = 4;
  const WIDTH = 6;

  const createCoordinates = (WIDTH: any, HEIGHT: any) => {
    const coordinates = [];
    for (let yPosition = 0; yPosition < HEIGHT; yPosition++) {
      for (let xPosition = 0; xPosition < WIDTH; xPosition++) {
        coordinates.push(`${xPosition},${yPosition}`);
      }
    }
    return coordinates;
  };

  const createGrid = (coordinates: any) => {
    const reversedCoordinates = coordinates.reverse();
    return reversedCoordinates;
  };

  const coordinates = createCoordinates(WIDTH, HEIGHT);
  const reversedCoordinates = createGrid(coordinates);

  return (
    <div className="h-screen w-full flex flex-col items-center">
      <div>
        <InstructionsForm />
      </div>

      <div className="sm:container">
        <div
          className={`grid grid-rows-${HEIGHT} grid-cols-${WIDTH}`}
          style={{ direction: "rtl" }}
        >
          {reversedCoordinates.map((value: any) => (
            <div
              key={value}
              className="border border-gray-500 text-center"
              data-coordinates={value}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
