import { ValidationComposite } from "@utils/validation/validators/composite.validation";
import { RequiredFieldValidation } from "@utils/validation/validators/requireField.validator";
import { StringFieldValidation } from "@utils/validation/validators/stringField.validation";
import { IValidation } from "@presentation/protocols/validation.interface";
import { RangeValidation } from "@utils/validation/validators/range.validation";
import { BooleanFieldValidation } from "@utils/validation/validators/booleanField.validation";
import { NumberFieldValidation } from "@utils/validation/validators/numberField.validation";

export const makeAddProductValidation = (): ValidationComposite => {
  const validations: IValidation[] = [];
  for (const field of [
    "name",
    "description",
    "isActive",
    "inStock",
    "price",
    "quantity",
  ]) {
    validations.push(new RequiredFieldValidation(field));
  }
  for (const field of ["name", "description"]) {
    validations.push(new StringFieldValidation(field));
  }
  for (const field of ["isActive", "inStock"]) {
    validations.push(new BooleanFieldValidation(field));
  }
  for (const field of ["price", "quantity"]) {
    validations.push(new NumberFieldValidation(field));
  }
  validations.push(new RangeValidation("price", 0));

  return new ValidationComposite(validations);
};
