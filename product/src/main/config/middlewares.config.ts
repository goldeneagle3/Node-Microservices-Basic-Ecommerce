import { Express } from "express";

import { bodyParser } from "@main/middlewares/body-parser.middleware";
import { contentType } from "@main/middlewares/content-type.middleware";
import { cors } from "@main/middlewares/cors.middleware";
import { morganMiddleware } from "@main/middlewares/logging.middleware";

export default (app: Express) => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
  app.use(morganMiddleware);
};
