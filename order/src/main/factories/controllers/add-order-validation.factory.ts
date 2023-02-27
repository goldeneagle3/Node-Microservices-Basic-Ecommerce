import { IValidation } from "@presentation/protocols/validation.interface";
import { ValidationComposite } from "@utils/validation/validators/composite.validation";
import { ParamValidation } from "@utils/validation/validators/param.validation";

export const makeAddOrderValidation = (): ValidationComposite => {
  const validations: IValidation[] = [];

  validations.push(new ParamValidation("product"));

  return new ValidationComposite(validations);
};
