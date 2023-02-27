import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export const serverError = {
  description: ErrorMessages.serverError,
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}