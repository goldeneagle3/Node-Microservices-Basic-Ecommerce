import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const zodValidate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      const body = error.issues.map((err) => {
        return {
          path: err.path[1],
          error: err.message,
        };
      });
      return res.status(400).json(body);
    }
  };
