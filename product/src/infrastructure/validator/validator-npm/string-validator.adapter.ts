import { IStringValidator } from "@utils/validation/protocols/string-validator.interface";
import validator from "validator";


export class StringValidatorAdapter implements IStringValidator {
  isValid(text: string): boolean {
    return validator.isString(text);
  }
}
