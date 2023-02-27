import { IAddOrder } from "@domain/use-cases/order-add";

export interface IAddOrderRepository {
  createOrder: (
    input: IAddOrderRepository.Params
  ) => Promise<IAddOrderRepository.Result>;
}

export namespace IAddOrderRepository {
  export type Params = IAddOrder.Params;
  export type Result = IAddOrder.Result;
}
