import { SearchProductsByTitleDB } from "@dal/repository/product-search-by-title-repo";
import { ISearchProductsByName } from "@domain/use-cases/product-search-by-title";
import { ProductMongoRepository } from "@infrastructure/db/mongo/product-repository.mongo";

export const makeSearchProductsByTitleDB = (): ISearchProductsByName => {
  const productRepository = new ProductMongoRepository();
  return new SearchProductsByTitleDB(productRepository);
};
