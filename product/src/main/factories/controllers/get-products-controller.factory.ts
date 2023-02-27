import { makeLogControllerDecorator } from "@main/factories/decorators/log-controller.factory";
import { makeGetProductsDB } from "@main/factories/usecases/get-products.factory";
import { GetProductsController } from "@presentation/controllers/get-products.controller";
import { IController } from "@presentation/protocols/controller.interface";

export const makeGetProductsController = (): IController => {
  const controller = new GetProductsController(makeGetProductsDB());

  return makeLogControllerDecorator(controller);
};
