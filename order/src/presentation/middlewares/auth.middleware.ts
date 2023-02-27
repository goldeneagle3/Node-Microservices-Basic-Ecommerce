import { IGetUserByToken } from "@domain/use-cases/getUserByToken";
import {
  ok,
  serverError,
  unauthorized,
} from "@presentation/helpers/http.helper";
import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";
import { IHttpResponse } from "@presentation/protocols/htttp.interface";
import { IMiddleware } from "@presentation/protocols/middleware.interface";
import { ILogging } from "@utils/logging/protocols/logging.interface";

export class AuthMiddleware implements IMiddleware {
  constructor(
    private readonly getUserByToken: IGetUserByToken,
    private readonly logger: ILogging,
    private readonly role?: string
  ) {}

  async handle(request: AuthMiddleware.Request): Promise<IHttpResponse> {
    try {
      const { accessToken } = request;
      if (accessToken) {
        const account = await this.getUserByToken.loadByToken(
          accessToken,
          this.role
        );
        if (account) {
          return ok({ userId: account.id });
        }
      }
      this.logger.error(ErrorMessages.unauthorized);
      return unauthorized();
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string;
  };
}
