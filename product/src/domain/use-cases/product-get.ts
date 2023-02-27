import { IProduct } from "@domain/model/product.model";

export interface IGetProducts {
  listProducts: () => Promise<IGetProducts.Result>;
}

export namespace IGetProducts {
  export type Result = IProduct[];
}
