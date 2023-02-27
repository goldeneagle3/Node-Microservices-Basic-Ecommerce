import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export class StringParamError extends Error {
  constructor(fieldName: string) {
    super(ErrorMessages.stringError(fieldName));
    this.name = "StringParamError";
  }
}
