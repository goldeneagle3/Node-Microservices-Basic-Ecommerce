import { Router } from "express";

import { adaptRoute } from "@main/adapters/express-route.adapter";
import { makeAddProductController } from "@main/factories/controllers/add-product-controller.factory";
import { makeGetProductsController } from "@main/factories/controllers/get-products-controller.factory";

export default (router: Router): void => {
  router.post("/products", adaptRoute(makeAddProductController()));
  router.get("/products", adaptRoute(makeGetProductsController()));
};
