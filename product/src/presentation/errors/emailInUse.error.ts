import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export class EmailInUseError extends Error {
  constructor() {
    super(ErrorMessages.emailDuplicate);
    this.name = "EmailInUseError";
  }
}
