import express, { Express, Request, Response } from "express";
import { iterationsRoutes } from "./routes";

const app: Express = express();
const PORT: number = 5000;

app.use(iterationsRoutes.path, iterationsRoutes.router);

app.get("/", (req: Request, res: Response) => {
  res.json(`HOME`);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
