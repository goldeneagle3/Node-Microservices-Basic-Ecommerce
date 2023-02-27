import { RangeError } from "@presentation/errors/range.error";
import { IValidation } from "@presentation/protocols/validation.interface";

export class RangeValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly min?: number,
    private readonly max?: number
  ) {}

  validate(input: any) {
    const fieldValue = input[this.fieldName].length;
    const isValid = this.max
      ? fieldValue > this.min && fieldValue < this.max
      : fieldValue > this.min;

    if (!isValid) {
      return new RangeError(this.fieldName, this.min, this.max);
    }
  }
}
