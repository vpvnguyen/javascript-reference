import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = 5000;

app.get("/", (req: Request, res: Response) => {
  res.json(`HOME`);
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
