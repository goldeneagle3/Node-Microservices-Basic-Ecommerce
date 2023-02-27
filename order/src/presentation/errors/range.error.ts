import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export class RangeError extends Error {
  constructor(fieldName: string, min: number = 0, max?: number) {
    super(ErrorMessages.lengthRange(fieldName, min, max));
    this.name = "RangeError";
  }
}
