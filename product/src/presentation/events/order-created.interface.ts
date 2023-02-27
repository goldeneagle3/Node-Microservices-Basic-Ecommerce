import { OrderStatus } from "@domain/types/orderStatus.type";
import { Subjects } from "@presentation/events/subjects";


export interface IOrderCreatedEvent {
  subject: Subjects.OrderCreated
  data: {
    orderId:string,
    status: OrderStatus,
    product: {
      id: string,
      price: number
    }
  }
}