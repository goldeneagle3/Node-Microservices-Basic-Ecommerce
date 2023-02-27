import { IProduct } from "@domain/model/product.model";
import { IAddProduct } from "@domain/use-cases/product-add";
import { IProductCreatedPublisher } from "@presentation/events/protocols/product-created-publisher.interface";
import {
  badRequest,
  noContent,
  ok,
  serverError,
} from "@presentation/helpers/http.helper";
import { IController } from "@presentation/protocols/controller.interface";
import { IHttpResponse } from "@presentation/protocols/htttp.interface";
import { IValidation } from "@presentation/protocols/validation.interface";

export class AddProductsController implements IController {
  constructor(
    private readonly validation: IValidation,
    private readonly addProducts: IAddProduct,
    private readonly publisherEvent: IProductCreatedPublisher
  ) {}

  async handle(request: AddProductsController.Request): Promise<IHttpResponse> {
    try {
      const error = this.validation.validate(request);
      if (error) {
        return badRequest(error);
      }
      const product = await this.addProducts.create(request);
      this.publisherEvent.publish({
        id: product.id,
        name: request.name,
        price: request.price,
        description: request.description,
      });
      return ok(product);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace AddProductsController {
  export type Request = Omit<IProduct, "id">;
}
