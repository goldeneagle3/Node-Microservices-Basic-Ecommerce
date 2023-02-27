import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export class UnauthorizedError extends Error {
  constructor() {
    super(ErrorMessages.unauthorized);
    this.name = "UnauthorizedError";
  }
}
