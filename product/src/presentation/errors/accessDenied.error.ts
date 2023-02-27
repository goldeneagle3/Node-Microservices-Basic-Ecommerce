import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export class AccessDeniedError extends Error {
  constructor() {
    super(ErrorMessages.accessDenied);
    this.name = "AccessDeniedError";
  }
}
