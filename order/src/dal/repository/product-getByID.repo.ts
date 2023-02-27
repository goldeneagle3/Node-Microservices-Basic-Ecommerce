import { IGetProductByIDRepository } from "@dal/protocols/db/product/product-getByID.interface";
import { IGetProductByID } from "@domain/use-cases/product-get-by-id";

export class GetProductByID implements IGetProductByID {
  constructor(private readonly getProductByIdRepo: IGetProductByIDRepository) {}

  async findById(productId: string): Promise<IGetProductByID.Result> {
    return await this.getProductByIdRepo.getByID(productId);
  }
}
