import { adaptMiddleware } from "@main/adapters/express-middleware.adapter";
import { makeLoggingHelper } from "@main/factories/helpers/logging-helper.factories";
import { makeAuthMiddleware } from "@main/factories/middlewares/auth-middleare.factory";

export const requireSignin = adaptMiddleware(
  makeAuthMiddleware(makeLoggingHelper())
);
