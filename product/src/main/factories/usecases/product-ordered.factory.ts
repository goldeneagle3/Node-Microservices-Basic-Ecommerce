import { ProductOrderedDB } from "@dal/repository/product-ordered-repo";
import { IProductOrdered } from "@domain/use-cases/product-ordered";
import { ProductMongoRepository } from "@infrastructure/db/mongo/product-repository.mongo";

export const makeDBProductOrdered = (): IProductOrdered => {
  const productMongoRepository = new ProductMongoRepository();
  return new ProductOrderedDB(productMongoRepository);
};
