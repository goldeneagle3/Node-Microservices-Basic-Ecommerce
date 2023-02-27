import express, { Express, Request, Response } from "express";

import setupMiddleware from "@main/config/middlewares.config";
import setupRoutes from "@main/config/routes.config";
import swaggerConfig from "@main/config/swagger.config";

export const setupApp = async (): Promise<Express> => {
  const app = express();
  swaggerConfig(app);
  setupMiddleware(app);
  setupRoutes(app);
  app.use("/api/orders/health",(_,res:Response) => {
    res.send("Hello From Order Server")
  })
  return app;
};
