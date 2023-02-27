import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export const forbidden = {
  description: ErrorMessages.accessDenied,
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}