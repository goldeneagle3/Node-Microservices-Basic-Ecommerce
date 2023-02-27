import { MissingParamError } from "@presentation/errors/missingParam.error";
import { IValidation } from "@presentation/protocols/validation.interface";

export class ParamValidation implements IValidation {
  constructor(private readonly param: string) {}

  validate(input: any): Error {
    if (!input) {
      return new MissingParamError(this.param);
    }
  }
}
