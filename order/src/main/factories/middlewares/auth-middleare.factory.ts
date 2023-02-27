import { makeUserByToken } from "@main/factories/usecases/user-by-token.factory";
import { AuthMiddleware } from "@presentation/middlewares/auth.middleware";
import { IMiddleware } from "@presentation/protocols/middleware.interface";
import { ILogging } from "@utils/logging/protocols/logging.interface";

export const makeAuthMiddleware = (
  loggingDevice?: ILogging,
  role?: string,
): IMiddleware => {
  return new AuthMiddleware(makeUserByToken(),loggingDevice,role);
};
