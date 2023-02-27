import { GetProductsDB } from "@dal/repository/product-get-all-repo";
import { IGetProducts } from "@domain/use-cases/product-get";
import { ProductMongoRepository } from "@infrastructure/db/mongo/product-repository.mongo";

export const makeGetProductsDB = (): IGetProducts => {
  const productRepository = new ProductMongoRepository();
  return new GetProductsDB(productRepository);
};
