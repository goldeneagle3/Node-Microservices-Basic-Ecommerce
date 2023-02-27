import { BooleanParamError } from "@presentation/errors/booleanParam.error";
import { IValidation } from "@presentation/protocols/validation.interface";

export class BooleanFieldValidation implements IValidation {
  constructor(private readonly fieldName: string) {}

  validate(input: any) {
    const isValid = typeof input[this.fieldName] !== "boolean";
    if (isValid) {
      return new BooleanParamError(this.fieldName);
    }
  }
}
