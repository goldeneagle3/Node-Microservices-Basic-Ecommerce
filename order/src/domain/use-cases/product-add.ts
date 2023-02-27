import { IProduct } from "@domain/model/product.model";

export interface IAddProduct {
  create: (data: IAddProduct.Params) => Promise<void>;
}

export namespace IAddProduct {
  export type Params = IProduct;
}
