import { Router, Request, Response } from "express";
import ArrayMethodsController from "./ArrayMethods.controller";

const router: Router = Router();

router.get("/:method", (req: Request, res: Response) => {
  try {
    const arrayMethodsController = new ArrayMethodsController(
      res.locals.arrayMethod.name,
      res.locals.arrayMethod.callback
    );
    const response = arrayMethodsController.getResponse();
    res.json(response);
  } catch (error) {
    console.error("arraymethodscontroller", error);
    res.json("error");
  }
});

export default router;
