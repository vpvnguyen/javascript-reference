import express, { Request, Response, Router } from "express";
import { IterationsController } from "../controllers";

const router: Router = express.Router();

router.get("/forEach", (req: Request, res: Response) => {
  IterationsController.forEach(req, res);
});

export default router;
