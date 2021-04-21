/* *
 * ConstructProgramOverride
 *
 * Define program override options within class constant
 * Construct program override options based on given key
 * */

class ConstructProgramOverride {
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
      console.warn("ConstructProgramOverride constructor error:", error);
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

const ProgramOverride = new ConstructProgramOverride("custom1");

console.log(
  `
override name?`,
  ProgramOverride.getName()
);
if (ProgramOverride.getName()) {
  console.log("OVERRIDE");
}

console.log(
  `
override description?`,
  ProgramOverride.getDescription()
);
if (ProgramOverride.getDescription()) {
  console.log("OVERRIDE");
}

console.log(
  `
override message?`,
  ProgramOverride.getMessage()
);
if (ProgramOverride.getMessage()) {
  console.log("OVERRIDE");
}

console.log(
  `
override amount?`,
  ProgramOverride.getAmount()
);
if (ProgramOverride.getAmount()) {
  console.log("OVERRIDE");
}
