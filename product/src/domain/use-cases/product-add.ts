import { IProduct } from "@domain/model/product.model";

export interface IAddProduct {
  create: (data: IAddProduct.Params) => Promise<IAddProduct.Result>;
}

export namespace IAddProduct {
  export type Params = Omit<IProduct, "id">;
  export type Result = Pick<IProduct, "id">;
}
