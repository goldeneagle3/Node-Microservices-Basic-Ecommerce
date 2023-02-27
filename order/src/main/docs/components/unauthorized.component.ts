import { ErrorMessages } from "@presentation/helpers/messages/error-messages.helper";

export const unauthorized = {
  description: ErrorMessages.unauthorized,
  content: {
    "application/json": {
      schema: {
        $ref: "#/schemas/error",
      },
    },
  },
};
