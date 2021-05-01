interface IOverrideOptions {
  [overrideOption: string]: string | null;
}

interface IOverridePrograms {
  [programKey: string]: IOverrideOptions;
}

class ProgramOverrideTS2 {
  private readonly overrideOptions: IOverrideOptions = {
    id: null,
    title: null,
    description: null,
  };
  private readonly campaignOptions: IOverridePrograms = {
    PROGRAM1: {
      title: "program 1",
      description: "description 1",
    },
    PROGRAM2: {
      id: "program 2 id",
    },
  };

  constructor(programKey: string) {
    this.overrideOptions = this.setOverrideOptions(programKey);
  }

  public getTitle = () => this.overrideOptions.title;

  public getId = () => this.overrideOptions.id;

  public getDescription = () => this.overrideOptions.description;

  private setOverrideOptions = (programKey: string) => {
    const programKeyUpperCase = programKey.toUpperCase();
    if (this.campaignOptions.hasOwnProperty(programKeyUpperCase)) {
      return {
        ...this.overrideOptions,
        ...this.campaignOptions[programKeyUpperCase],
      };
    }
    return this.overrideOptions;
  };
}

const overrideProgram = new ProgramOverrideTS2("PROGRAM2");

console.log("\ngetTitle", overrideProgram.getTitle());
if (overrideProgram.getTitle()) {
  console.log("OVERRIDE");
}

console.log("\ngetId", overrideProgram.getId());
if (overrideProgram.getId()) {
  console.log("OVERRIDE");
}

console.log("\ngetDescription", overrideProgram.getDescription());
if (overrideProgram.getDescription()) {
  console.log("OVERRIDE");
}
