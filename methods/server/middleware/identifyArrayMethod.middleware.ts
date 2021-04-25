import { Request, Response, NextFunction } from "express";
import { ArrayMethodsModel } from "../models/index";

const arrayMethodExists = (arrayMethodsModel: any, arrayMethodName: any) => {
  if (!arrayMethodsModel || !arrayMethodName) return false;
  if (!arrayMethodsModel[arrayMethodName]) return false;
  return true;
};

const storeArrayMethod = () => {};

const identifyArrayMethod = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("identifyArrayMethod");
  const arrayMethodName = Object.keys(ArrayMethodsModel);

  console.log(arrayMethodName);
  next();
  // if (!arrayMethodExists(ArrayMethodsModel, arrayMethodName)) throw new Error('identifyArrayMethod');
};

export default identifyArrayMethod;
