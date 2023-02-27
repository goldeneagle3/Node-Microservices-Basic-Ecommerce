import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export class ServerError extends Error {
  constructor(stack: string) {
    super(ErrorMessages.serverError);
    this.name = "ServerError";
    this.stack = stack;
  }
}
