import { IProduct } from "@domain/model/product.model";

export interface IGetProductRepository {
  listAll: () => Promise<IGetProductRepository.Result>;
}

export namespace IGetProductRepository {
  export type Result = IProduct[];
}
