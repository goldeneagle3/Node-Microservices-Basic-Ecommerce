import { IAddOrderRepository } from "@dal/protocols/db/order/order-add.interface";
import { IAddOrder } from "@domain/use-cases/order-add";

export class AddOrderDB implements IAddOrder {
  constructor(private readonly addOrderRepo: IAddOrderRepository) {}

  async create(data: IAddOrder.Params): Promise<IAddOrder.Result> {
    return await this.addOrderRepo.createOrder(data);
  }
}
