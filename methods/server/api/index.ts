import { Router } from "express";
import { identifyArrayMethod } from "../middleware";
import arrayMethodsRouter from "./arrayMethods";

const router: Router = Router();

router.use("/arrayMethods", identifyArrayMethod, arrayMethodsRouter);

router.get("/", (req, res) => {
  res.json("API");
});

export default router;
