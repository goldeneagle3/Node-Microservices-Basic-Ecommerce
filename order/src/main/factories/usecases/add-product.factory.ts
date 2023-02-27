import { IAddProduct } from "@domain/use-cases/product-add";
import { AddProductDb } from "@dal/repository/product-add-repo";
import { ProductMongoRepository } from "@infrastructure/db/mongo/product-repository.mongo";

export const makeDBAddProduct = (): IAddProduct => {
  const productMongoRepository = new ProductMongoRepository();
  return new AddProductDb(productMongoRepository);
};
