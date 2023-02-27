import { makeAddProductValidation } from "@main/factories/controllers/add-product-validation.factory";
import { makeLogControllerDecorator } from "main/factories/decorators/log-controller.factory";
import { makeDBAddProduct } from "@main/factories/usecases/add-product.factory";
import { AddProductsController } from "@presentation/controllers/add-product.controller";
import { IController } from "presentation/protocols/controller.interface";
import { makeProductCreatedPublisher } from "@main/factories/events/publisher/publish-product-created.factory";

export const makeAddProductController = (): IController => {
  const controller = new AddProductsController(
    makeAddProductValidation(),
    makeDBAddProduct(),
    makeProductCreatedPublisher()
  );

  return makeLogControllerDecorator(controller);
};
