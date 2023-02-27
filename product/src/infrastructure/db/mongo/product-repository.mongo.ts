import { IGetProductRepository } from "@dal/protocols/db/product/product-get-all.interface";
import { ISearchProductsByNameRepository } from "@dal/protocols/db/product/product-search-by-name.interface";
import { QueryBuilder } from "@infrastructure/db/mongo/query-builder";
import { IAddProductRepository } from "@dal/protocols/db/product/product-add.interface";
import { MongoHelper } from "infrastructure/db/mongo/mongo-helper";
import { IAddProduct } from "@domain/use-cases/product-add";
import { IProductOrderedRepository } from "@dal/protocols/db/product/product-ordered.interface";
import { ObjectId } from "mongodb";

export class ProductMongoRepository
  implements
    IAddProductRepository,
    IGetProductRepository,
    ISearchProductsByNameRepository,
    IProductOrderedRepository
{
  async add(data: IAddProduct.Params): Promise<IAddProduct.Result> {
    const productCollection = await MongoHelper.getCollection("products");
    const product = await productCollection.insertOne(data);
    const id = product.insertedId.toHexString();
    return { id };
  }

  async listAll(): Promise<IGetProductRepository.Result> {
    const productCollection = await MongoHelper.getCollection("products");
    const query = new QueryBuilder()
      .project({
        _id: 1,
        name: 1,
        isActive: 1,
        inStock: 1,
        price: 1,
        description: 1,
        quantity: 1,
      })
      .build();
    const products = await productCollection.aggregate(query).toArray();
    return products && MongoHelper.mapCollection(products);
  }

  async getPostsByName(
    name: string
  ): Promise<ISearchProductsByNameRepository.Result> {
    const productCollection = MongoHelper.getCollection("products");
    const query = new QueryBuilder()
      .match({ name: { $regex: name, $options: "i" }, isActive: true })
      .project({ _id: 1, name: 1, price: 1, quantity: 1 })
      .build();
    const products = await productCollection.aggregate(query).toArray();
    return MongoHelper.mapCollection(products);
  }

  async productOrdered(productId: string): Promise<void> {
    console.log(productId);
    const productCollection = MongoHelper.getCollection("products");
    await productCollection.findOneAndUpdate(
      { _id: new ObjectId(productId) },
      { $inc: { quantity: -1 } }
    );
  }
}
