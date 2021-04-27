import { Router, Request, Response } from "express";
import ArrayMethodsController from "./ArrayMethods.controller";
import { identifyArrayMethodParams } from "../../middleware";

const router: Router = Router();

router.get(
  "/:method",
  identifyArrayMethodParams,
  (req: Request, res: Response) => {
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
  }
);

export default router;
