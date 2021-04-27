import { LogOperationsService } from "../../services";
const numsArray = [1, 2, 3, 4, 5];
export default class ArrayMethodsController {
  private response: any;
  constructor(name: string, callback: any) {
    try {
      const log = new LogOperationsService(name, numsArray, callback);
      const response = log.getResponse();
      console.log(response);
      this.response = response;
    } catch (error) {
      console.error(name, error);
      this.response = error;
    }
  }

  public getResponse = () => this.response;
}
