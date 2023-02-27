import { IAddOrderRepository } from "@dal/protocols/db/order/order-add.interface";
import { IAddOrder } from "@domain/use-cases/order-add";
import { MongoHelper } from "@infrastructure/db/mongo/mongo-helper";

export class OrderMongoRepository implements IAddOrderRepository {
  async createOrder(input: IAddOrder.Params): Promise<IAddOrder.Result> {
    const orderCollection = await MongoHelper.getCollection("orders");
    const order = await orderCollection.insertOne(input);
    const id = order.insertedId.toHexString();
    return { id };
  }
}
