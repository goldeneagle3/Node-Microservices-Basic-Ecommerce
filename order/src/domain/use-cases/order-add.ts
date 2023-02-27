import { IOrder } from "@domain/model/order.model";

export interface IAddOrder {
  create: (data: IAddOrder.Params) => Promise<IAddOrder.Result>;
}

export namespace IAddOrder {
  export type Params = Omit<IOrder, "id">;
  export type Result = Pick<IOrder, "id">;

}
