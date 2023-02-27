import { NextFunction, Request, Response } from "express";
import { IMiddleware } from "@presentation/protocols/middleware.interface";

export const adaptMiddleware = (middleware: IMiddleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      accessToken: req.headers?.["x-access-token"],
      ...(req.headers || {}),
    };
    const httpResponse = await middleware.handle(request);
    if (httpResponse.statusCode === 200) {
      Object.assign(res.locals, httpResponse.body);
      next();
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};
