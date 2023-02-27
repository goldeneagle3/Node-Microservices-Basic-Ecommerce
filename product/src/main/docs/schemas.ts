import {
  errorSchema,
  addProductParamsSchema,
  productSchema,
  productsSchema
} from "./schemas/index";

export default {
  error: errorSchema,
  addProductParams: addProductParamsSchema,
  product: productSchema,
  products: productsSchema,
};
