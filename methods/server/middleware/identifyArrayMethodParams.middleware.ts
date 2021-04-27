import { Request, Response, NextFunction } from "express";
import { ArrayMethodsService } from "../services";

const getArrayMethodName = (methodFromPath: string) => {
  const arrayMethodServiceKeys = Object.keys(ArrayMethodsService);

  const filteredMethods = arrayMethodServiceKeys.filter(
    (method: string) => method.toLowerCase() === methodFromPath.toLowerCase()
  );

  if (filteredMethods.length > 0) {
    return filteredMethods[0];
  }
  return null;
};

const setArrayMethod = (arrayMethodName: any, arrayMethodsModel: any) =>
  arrayMethodsModel[arrayMethodName];

const identifyArrayMethodParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const methodFromParams = req.params.method;

  const arrayMethodName = getArrayMethodName(methodFromParams);

  const arrayMethod = setArrayMethod(arrayMethodName, ArrayMethodsService);

  res.locals.arrayMethod = arrayMethod;

  next();
};

export default identifyArrayMethodParams;
