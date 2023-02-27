import { IGetProductRepository } from "@dal/protocols/db/product/product-get-all.interface";
import { IGetProducts } from "@domain/use-cases/product-get";

export class GetProductsDB implements IGetProducts {
  constructor(private readonly getAllProducts: IGetProductRepository) {}

  async listProducts(): Promise<IGetProducts.Result> {
    return await this.getAllProducts.listAll();
  }
}
