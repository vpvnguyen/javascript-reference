/* *
 * ConstructProgramOverride
 *
 * Define program override options within class constant
 * Construct program override options based on given key
 * */

class ProgramOverride {
  defaultOptions = {
    name: null,
    description: null,
    message: null,
    amount: null,
  };

  getOverrideOptions = (allProgramOverrideOptions, programOverrideKey) => {
    if (allProgramOverrideOptions.hasOwnProperty(programOverrideKey)) {
      return {
        ...this.defaultOptions,
        ...allProgramOverrideOptions[programOverrideKey],
      };
    }
    return this.defaultOptions;
  };

  constructor(allProgramOverrideOptions, programOverrideKey) {
    try {
      const programOverrideOptions = this.getOverrideOptions(
        allProgramOverrideOptions,
        programOverrideKey
      );
      this.name = programOverrideOptions.name;
      this.description = programOverrideOptions.description;
      this.message = programOverrideOptions.message;
      this.amount = programOverrideOptions.amount;
    } catch (error) {
      console.warn("ProgramOverride constructor error:", error);
    }
  }

  getName = () => this.name;

  getDescription = () => this.description;

  getMessage = () => this.message;

  getAmount = () => this.amount;
}

/* *
 * Instantiate instance of program overrides
 * Use property if it exists
 * */

const allProgramOverrideOptions = {
  option1: {
    name: "option1",
    description: "option1 description",
  },
  option2: {
    name: "option2",
    message: "option2 message",
    amount: "option2 $9001",
  },
};

const OverrideProgram = new ProgramOverride(
  allProgramOverrideOptions,
  "option1"
);

console.log(
  `
override name?`,
  OverrideProgram.getName()
);
if (OverrideProgram.getName()) {
  console.log("OVERRIDE");
}

console.log(
  `
override description?`,
  OverrideProgram.getDescription()
);
if (OverrideProgram.getDescription()) {
  console.log("OVERRIDE");
}

console.log(
  `
override message?`,
  OverrideProgram.getMessage()
);
if (OverrideProgram.getMessage()) {
  console.log("OVERRIDE");
}

console.log(
  `
override amount?`,
  OverrideProgram.getAmount()
);
if (OverrideProgram.getAmount()) {
  console.log("OVERRIDE");
}
