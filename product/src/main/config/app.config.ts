import express, { Express, Request, Response } from "express";

import setupMiddleware from "@main/config/middlewares.config";
import setupRoutes from "@main/config/routes.config";
import swaggerConfig from "@main/config/swagger.config";

export const setupApp = async (): Promise<Express> => {
  const app = express();
  swaggerConfig(app);
  setupMiddleware(app);
  setupRoutes(app);
  app.use("/health",(_,res:Response) => {
    console.log("health check")
    res.send("Hello From Product Server")
  })
  return app;
};
