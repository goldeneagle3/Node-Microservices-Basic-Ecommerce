import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(ErrorMessages.missingParam(paramName));
    this.name = "MisssingParamError";
  }
}
