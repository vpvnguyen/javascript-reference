/* *
 * Program Override Class
 *
 * Set non-override options by initializing default options to null
 * Construct program override options based on given override object and property key
 * */

class ProgramOverrideTS {
  private readonly defaultOptions = {
    name: null,
    description: null,
    message: null,
    amount: null,
  };

  private name: string;
  private description: string;
  private message: string;
  private amount: string;

  private getOverrideOptions = (
    allProgramOverrideOptions: object,
    programOverrideKey: string
  ) => {
    if (allProgramOverrideOptions.hasOwnProperty(programOverrideKey)) {
      return {
        ...this.defaultOptions,
        ...allProgramOverrideOptions[programOverrideKey],
      };
    }
    return this.defaultOptions;
  };

  constructor(allProgramOverrideOptions: object, programOverrideKey: string) {
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

  public getName = () => this.name;

  public getDescription = () => this.description;

  public getMessage = () => this.message;

  public getAmount = () => this.amount;
}

/* *
 * Instantiate a new instance of program overrides
 * Use override property if it exists
 * */

const allProgramOverrideOptionsTS = {
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

const OverrideProgramTS = new ProgramOverrideTS(
  allProgramOverrideOptionsTS,
  "option1"
);

console.log(
  `
  override name?`,
  OverrideProgramTS.getName()
);
if (OverrideProgramTS.getName()) {
  console.log("OVERRIDE");
}

console.log(
  `
  override description?`,
  OverrideProgramTS.getDescription()
);
if (OverrideProgramTS.getDescription()) {
  console.log("OVERRIDE");
}

console.log(
  `
  override message?`,
  OverrideProgramTS.getMessage()
);
if (OverrideProgramTS.getMessage()) {
  console.log("OVERRIDE");
}

console.log(
  `
  override amount?`,
  OverrideProgramTS.getAmount()
);
if (OverrideProgramTS.getAmount()) {
  console.log("OVERRIDE");
}
