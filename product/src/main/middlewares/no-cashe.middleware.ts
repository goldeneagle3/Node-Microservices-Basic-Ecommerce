import { NextFunction, Response } from "express";

export const noCache = (_, res: Response, next: NextFunction): void => {
  res.set(
    "cache-control",
    `no-store,no-cashe,must-revalidate,proxy-revalidate`
  );
  res.set("pragma", "no-cashe");
  res.set("expires", "0");
  res.set("surrogate-control", "no-store");
  next();
};
