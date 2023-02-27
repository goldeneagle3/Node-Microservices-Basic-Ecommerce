import { LengthError } from "@presentation/errors/length.error";
import { IValidation } from "@presentation/protocols/validation.interface";

export class LengthValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly minLength?: number,
    private readonly maxLength?: number
  ) {}

  validate(input: any) {
    const fieldLength = input[this.fieldName].length;
    const isValid = this.maxLength
      ? fieldLength > this.minLength && fieldLength < this.maxLength
      : fieldLength > this.minLength;

    if (!isValid) {
      return new LengthError(this.fieldName, this.minLength, this.maxLength);
    }
  }
}
