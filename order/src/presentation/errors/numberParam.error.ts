import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export class NumberParamError extends Error {
  constructor(fieldName: string) {
    super(ErrorMessages.numberError(fieldName));
    this.name = "NumberParamError";
  }
}
