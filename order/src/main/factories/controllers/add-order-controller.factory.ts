import { makeAddOrderValidation } from "@main/factories/controllers/add-order-validation.factory";
import { makeLogControllerDecorator } from "@main/factories/decorators/log-controller.factory";
import { makeOrderCreatedPublisher } from "@main/factories/events/publishers/order-created-publisher.factory";
import { makeDBAddOrder } from "@main/factories/usecases/add-order.factory";
import { makeDBGetProductByID } from "@main/factories/usecases/get-product-by-id.factory";
import { AddOrderController } from "@presentation/controllers/add-order.controller";
import { IController } from "@presentation/protocols/controller.interface";

export const makeAddOrderController = (): IController => {
  const controller = new AddOrderController(
    makeAddOrderValidation(),
    makeDBGetProductByID(),
    makeDBAddOrder(),
    makeOrderCreatedPublisher()
  );

  return makeLogControllerDecorator(controller);
};
