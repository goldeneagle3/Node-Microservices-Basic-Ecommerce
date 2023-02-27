import { IAddProductRepository } from "@dal/protocols/db/product/product-add.interface";
import { MongoHelper } from "infrastructure/db/mongo/mongo-helper";
import { IAddProduct } from "@domain/use-cases/product-add";
import { ObjectID } from "bson";
import { IGetProductByIDRepository } from "@dal/protocols/db/product/product-getByID.interface";
import { IGetProductByID } from "@domain/use-cases/product-get-by-id";

export class ProductMongoRepository
  implements IAddProductRepository, IGetProductByIDRepository
{
  async add(data: IAddProduct.Params): Promise<void> {
    const productCollection = await MongoHelper.getCollection("products");
    await productCollection.insertOne({
      _id: new ObjectID(data.id),
      name: data.name,
      description: data.description,
      price: data.price,
    });
  }

  async getByID(productId: string): Promise<IGetProductByID.Result> {
    const productCollection = await MongoHelper.getCollection("products");
    const product = await productCollection.findOne({
      _id: new ObjectID(productId),
    });
    return product && MongoHelper.map(product);
  }
}
