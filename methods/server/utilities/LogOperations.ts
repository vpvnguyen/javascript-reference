export default class LogOperations {
  private readonly logOperationsResponse: {
    operation: string;
    arrayBefore: any[];
    arrayAfter: any[] | null | undefined;
    mutates: boolean;
    result: any;
  };

  constructor(operationName: string, array: any[], callback: any) {
    const input: any = [...array];
    const result: any = callback(array) || "undefined or null";

    this.logOperationsResponse = {
      operation: operationName,
      arrayBefore: input,
      arrayAfter: array,
      mutates: this.mutatesArray(input, array), // shallow check
      result,
    };
  }

  public getResponse = () => this.logOperationsResponse;

  private mutatesArray = (input: any, array: any) => {
    if (!input || !array) return true;
    if (input !== array) return true;
    if (input.length !== array.length) return true;

    input.forEach((item: any, index: number) => {
      if (item !== array[index]) return true;
    });

    return false;
  };
}
