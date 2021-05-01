import { Router } from "express";
import arrayMethodsRouter from "./arrayMethods";

const router: Router = Router();

router.use("/arrayMethods", arrayMethodsRouter);

router.get("/", (req, res) => {
  res.json("API");
});

export default router;
