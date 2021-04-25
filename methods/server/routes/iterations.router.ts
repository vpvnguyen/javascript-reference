import express, { Request, Response, Router } from "express";
import { IterationsController } from "../controllers";

const router: Router = express.Router();

router.get("/forEach", (req: Request, res: Response) => {
  try {
    IterationsController.forEach(req, res);
  } catch (error) {
    // TODO: refactor with errorHandler
    console.error("Iterations forEach Route Error", error);
    throw new Error("Iterations forEach Route Error");
  }
});

export default router;
