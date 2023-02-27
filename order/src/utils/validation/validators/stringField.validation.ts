import { StringParamError } from "@presentation/errors/stringParam.error";
import { IValidation } from "@presentation/protocols/validation.interface";

export class StringFieldValidation implements IValidation {
  constructor(private readonly fieldName: string) {}

  validate(input: any) {
    const isValid = typeof input[this.fieldName] !== "string";
    if (isValid) {
      return new StringParamError(this.fieldName);
    }
  }
}
