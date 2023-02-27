import { IProductOrderedRepository } from "@dal/protocols/db/product/product-ordered.interface";
import { IProductOrdered } from "@domain/use-cases/product-ordered";

export class ProductOrderedDB implements IProductOrdered {
  constructor(private readonly productOrderedDB: IProductOrderedRepository) {}

  async productOrdered(productId: string): Promise<void> {
    await this.productOrderedDB.productOrdered(productId);
  }
}
