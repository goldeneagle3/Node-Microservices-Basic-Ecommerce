import { apiKey } from "@main/docs/schemas/index";
import {
  badRequest,
  serverError,
  notFound,
  forbidden,
  unauthorized,
} from "./components/index";

export default {
  securitySchemes: {
    apiKeyAuth: apiKey,
  },
  badRequest,
  serverError,
  forbidden,
  notFound,
  unauthorized,
};
