import { NumberParamError } from "@presentation/errors/numberParam.error";
import { IValidation } from "@presentation/protocols/validation.interface";

export class NumberFieldValidation implements IValidation {
  constructor(private readonly fieldName: string) {}

  validate(input: any) {
    const isValid = typeof input[this.fieldName] !== "number";
    if (isValid) {
      return new NumberParamError(this.fieldName);
    }
  }
}
