import { IProduct } from "@domain/model/product.model";

export interface ISearchProductsByNameRepository {
  getPostsByName: (
    title: string
  ) => Promise<ISearchProductsByNameRepository.Result>;
}

export namespace ISearchProductsByNameRepository {
  export type Result = IProduct[];
}
