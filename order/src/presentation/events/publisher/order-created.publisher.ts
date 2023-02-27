import { IOrderCreatedEvent } from "@presentation/events/order-created.interface";
import { BasePublisher } from "@presentation/events/publisher/BasePublisher";
import { Subjects } from "@presentation/events/subjects";

export class OrderCreatedPublisher extends BasePublisher<IOrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
