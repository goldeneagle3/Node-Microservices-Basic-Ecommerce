import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export class CompareError extends Error {
  constructor(fieldName:string,compareField:string){
    super(ErrorMessages.compareErrorMessage(fieldName,compareField))
    this.name = 'CompareError'
  }
}