import { IGetProductByID } from "@domain/use-cases/product-get-by-id";

export interface IGetProductByIDRepository {
  getByID: (productId: string) => Promise<IGetProductByID.Result>;
}
