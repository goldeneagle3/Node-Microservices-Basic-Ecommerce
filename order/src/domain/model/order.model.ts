import { OrderStatus } from "@domain/types/orderStatus.type";

export interface IOrder {
  id: string;
  product: string;
  status: OrderStatus;
}
