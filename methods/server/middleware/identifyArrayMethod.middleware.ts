import { Request, Response, NextFunction } from "express";
import { ArrayMethodsService } from "../services";

const getMethodFromPath = (path: string) => {
  const method = path.split("/")[1];
  return method;
};

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

const identifyArrayMethod = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const methodFromPath = getMethodFromPath(req.path);

  const arrayMethodName = getArrayMethodName(methodFromPath);

  const arrayMethod = setArrayMethod(arrayMethodName, ArrayMethodsService);
  res.locals.arrayMethod = arrayMethod;
  console.log(res.locals.arrayMethod);

  next();
};

export default identifyArrayMethod;
