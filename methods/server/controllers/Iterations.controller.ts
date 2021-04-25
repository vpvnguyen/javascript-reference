import { Request, Response } from "express";
import {
  ServicesConstants,
  LogOperationsService,
  IterationsService,
} from "../services";

export default class IterationsController {
  public static forEach = (_req: Request, res: Response) => {
    const operationName: string = "forEach";

    try {
      const log = new LogOperationsService(
        operationName,
        ServicesConstants.numsArray,
        (array: any) => IterationsService.forEach(array, (value: any) => value)
      );
      const response = log.getResponse();
      res.json(response);
    } catch (error) {
      console.error(operationName, error);
      res.json(error);
    }
  };
}
