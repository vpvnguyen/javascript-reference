import express, { Express, Request, Response } from "express";
import apiRouter from "./api";

const app: Express = express();
const PORT: number = 5000;

app.use("/api", apiRouter);

app.get("/", (req: Request, res: Response) => {
  res.json(`HOME`);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
