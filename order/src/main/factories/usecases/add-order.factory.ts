import { AddOrderDB } from "@dal/repository/order-add.repo";
import { IAddOrder } from "@domain/use-cases/order-add";
import { OrderMongoRepository } from "@infrastructure/db/mongo/order-repository.mongo";

export const makeDBAddOrder = (): IAddOrder => {
  const orderRepository = new OrderMongoRepository();
  return new AddOrderDB(orderRepository);
};
