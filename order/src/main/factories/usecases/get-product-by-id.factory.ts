import { GetProductByID } from "@dal/repository/product-getByID.repo";
import { IGetProductByID } from "@domain/use-cases/product-get-by-id";
import { ProductMongoRepository } from "@infrastructure/db/mongo/product-repository.mongo";

export const makeDBGetProductByID = (): IGetProductByID => {
  const productRepository = new ProductMongoRepository();
  return new GetProductByID(productRepository);
};
