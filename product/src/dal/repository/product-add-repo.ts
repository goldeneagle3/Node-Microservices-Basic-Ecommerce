import { IAddProduct } from "@domain/use-cases/product-add";
import { IAddProductRepository } from "@dal/protocols/db/product/product-add.interface";

export class AddProductDb implements IAddProduct {
  constructor(private readonly addPostRepository: IAddProductRepository) {}

  async create(data: IAddProduct.Params): Promise<IAddProduct.Result> {
    return await this.addPostRepository.add(data);
  }
}
