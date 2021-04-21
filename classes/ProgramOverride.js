/* *
 * ConstructProgramOverride
 *
 * Define program override options within class constant
 * Construct program override options based on given key
 * */

class ProgramOverride {
  allProgramOverrideOptions = {
    default: {},
    custom1: {
      name: "custom1",
      description: "custom1",
    },
    custom2: {
      name: "custom2",
      amount: "$9001",
    },
  };

  getOverrideOptions = (programOverrideKey) => {
    if (this.allProgramOverrideOptions.hasOwnProperty(programOverrideKey)) {
      return this.allProgramOverrideOptions[programOverrideKey];
    }
    return this.allProgramOverrideOptions.default;
  };

  constructor(programOverrideKey) {
    try {
      const programOverrideOptions = this.getOverrideOptions(
        programOverrideKey
      );
      this.name = programOverrideOptions.name || null;
      this.description = programOverrideOptions.description || null;
      this.message = programOverrideOptions.message || null;
      this.amount = programOverrideOptions.amount || null;
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

const OverrideProgram = new ProgramOverride("custom1");

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
