import { Router } from "express";

import { adaptRoute } from "@main/adapters/express-route.adapter";
import { makeAddOrderController } from "@main/factories/controllers/add-order-controller.factory";

export default (router: Router): void => {
  router.post("/orders/:productId", adaptRoute(makeAddOrderController()));
};
