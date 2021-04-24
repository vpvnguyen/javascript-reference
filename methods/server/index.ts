import express, { Express, Request, Response } from "express";
import LogOperations from "./utilities/LogOperations";
import Iteration from "./classes/Iteration";

const app: Express = express();
const PORT: number = 5000;

const numsArray: number[] = [1, 2, 3, 4, 5];

app.get("/iteration/forEach", (req: Request, res: Response) => {
  const operationName: string = "forEach";
  try {
    const log = new LogOperations(operationName, numsArray, (array: any) =>
      Iteration.forEach(array, (value: any) => value)
    );
    const response = log.getResponse();
    res.json(response);
  } catch (error) {
    console.error(operationName, error);
    res.json(error);
  }
});

app.get("/", (req: Request, res: Response) => {
  res.json(`HOME`);
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
