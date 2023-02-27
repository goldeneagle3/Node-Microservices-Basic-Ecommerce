import { IAddProduct } from "@domain/use-cases/product-add";

export interface IAddProductRepository {
  add: (data: IAddProductRepository.Params) => Promise<void>;
}

export namespace IAddProductRepository {
  export type Params = IAddProduct.Params;
}
