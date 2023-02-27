import { IProduct } from "@domain/model/product.model";

export interface ISearchProductsByName {
  searchByName: (name: string) => Promise<ISearchProductsByName.Result>;
}

export namespace ISearchProductsByName {
  export type Result = IProduct[];
}
