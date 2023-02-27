import { IProduct } from "@domain/model/product.model";

export interface IGetProductByID {
  findById: (productID: string) => Promise<IGetProductByID.Result>;
}

export namespace IGetProductByID {
  export type Result = IProduct;
}
