import validator from "validator";

import { IEmailValidator } from "@utils/validation/protocols/email-validator.interface";

export class EmailValidatorAdapter implements IEmailValidator {
  isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}
