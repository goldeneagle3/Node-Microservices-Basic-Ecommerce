import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export class BooleanParamError extends Error {
  constructor(fieldName: string) {
    super(ErrorMessages.booleanError(fieldName));
    this.name = "BooleanParamError";
  }
}
