import * as _ from "lodash";

import { BaseServerMessageHelper } from "@presentation/helpers/messages/server-messages.helper";

export class ErrorMessages extends BaseServerMessageHelper {
  static stringError(param: string): string {
    return `${_.startCase(param + " field")} must be type of string.`;
  }
  static numberError(param: string): string {
    return `${_.startCase(param + " field")} must be type of number.`;
  }
  static booleanError(param: string): string {
    return `${_.startCase(param + " field")} must be type of boolean.`;
  }
  static missingParam(param: string): string {
    return `${_.startCase(param + " field")} is missing.`;
  }
  static lengthRange(param: string, min: number, max?: number): string {
    if (!max) {
      return `${_.startCase(
        param + " field"
      )} must contains ${min} chars at least.`;
    } else if (max) {
      return `${_.startCase(
        param + " field"
      )} must contains ${min} chars at least and ${max} at most.`;
    }
  }
  static valueRange(param: string, min: number, max?: number): string {
    if (!max) {
      return `${_.startCase(param)} must not be lower than ${min}.`;
    } else if (max) {
      return `${_.startCase(
        param
      )} must be in range between ${min} and ${max}.`;
    }
  }
  static compareErrorMessage(field: string, compare: string): string {
    return `${_.startCase(field)} and ${_.startCase(
      compare
    )} fields must be equal.`;
  }

  static emailDuplicate: string = "The received email is already in use.";
  static serverError: string = "Internal Server Error";
  static accessDenied: string = "Not allowed to access this source.";
  static unauthorized: string =
    "Not authorized to carry out this operation.";
}
