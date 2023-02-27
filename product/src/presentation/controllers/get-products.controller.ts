import { IGetProducts } from "@domain/use-cases/product-get";
import { noContent, ok, serverError } from "@presentation/helpers/http.helper";
import { IController } from "@presentation/protocols/controller.interface";
import { IHttpResponse } from "@presentation/protocols/htttp.interface";

export class GetProductsController implements IController {
  constructor(private readonly getAllProducts: IGetProducts) {}

  async handle(): Promise<IHttpResponse> {
    try {
      const products = await this.getAllProducts.listProducts();
      return products.length ? ok(products) : noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
