import { LogOperationsService } from "../../services";

const numsArray: number[] = [1, 2, 3, 4, 5];

export default class ArrayMethodsController {
  private response: any;
  constructor(name: string, callback: any) {
    try {
      const log = new LogOperationsService(name, numsArray, callback);
      const response = log.getResponse();
      this.response = response;
    } catch (error) {
      console.error("ArrayMethodsController Error", name, error);
      this.response = error;
    }
  }

  public getResponse = () => this.response;
}
