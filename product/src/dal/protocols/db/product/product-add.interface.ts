import { IAddProduct } from "@domain/use-cases/product-add";

export interface IAddProductRepository {
  add: (
    data: IAddProductRepository.Params
  ) => Promise<IAddProductRepository.Result>;
}

export namespace IAddProductRepository {
  export type Params = IAddProduct.Params;
  export type Result = IAddProduct.Result;
}
