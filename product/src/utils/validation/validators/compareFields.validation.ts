import { CompareError } from "@presentation/errors/notCompared.error";
import { IValidation } from "@presentation/protocols/validation.interface";

export class CompareFieldsValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly fieldToCompare: string
  ) {}

  validate(input: any) {
    if (input[this.fieldName] !== input[this.fieldToCompare]) {
      return new CompareError(this.fieldName, this.fieldToCompare);
    }
  }
}
