import { InvalidParamError } from "@presentation/errors/invalidParam.error";
import { IValidation } from "@presentation/protocols/validation.interface";
import { IEmailValidator } from "@utils/validation/protocols/email-validator.interface";

export class EmailValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: IEmailValidator
  ) {}

  validate(input: any) {
    const isValid = this.emailValidator.isValid(input[this.fieldName]);
    if (!isValid) {
      return new InvalidParamError(this.fieldName);
    }
  }
}
