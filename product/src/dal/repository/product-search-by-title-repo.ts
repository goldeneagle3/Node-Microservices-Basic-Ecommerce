import { ISearchProductsByNameRepository } from "@dal/protocols/db/product/product-search-by-name.interface";
import { ISearchProductsByName } from "@domain/use-cases/product-search-by-title";

export class SearchProductsByTitleDB implements ISearchProductsByName {
  constructor(
    private readonly getPostsByTitleRepo: ISearchProductsByNameRepository
  ) {}

  async searchByName(title: string): Promise<ISearchProductsByName.Result> {
    return await this.getPostsByTitleRepo.getPostsByName(title);
  }
}
