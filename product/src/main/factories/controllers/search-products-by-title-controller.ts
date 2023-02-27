import { makeLogControllerDecorator } from "@main/factories/decorators/log-controller.factory";
import { makeSearchProductsByTitleDB } from "@main/factories/usecases/search-products-by-title.factory";
import { GetProductsByTitle } from "@presentation/controllers/get-products-by-title.controller";
import { IController } from "@presentation/protocols/controller.interface";

export const makeSearchProductsByTitle = (): IController => {
  const controller = new GetProductsByTitle(makeSearchProductsByTitleDB());

  return makeLogControllerDecorator(controller);
};
