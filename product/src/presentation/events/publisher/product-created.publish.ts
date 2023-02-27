import { BasePublisher } from "@presentation/events/publisher/BasePublisher";
import { IProductCreateEvent } from "@presentation/events/product-created.interface";
import { Subjects } from "@presentation/events/subjects";

export class ProductCreatedPublisher
  extends BasePublisher<IProductCreateEvent>
{
  subject: Subjects.ProductCreated = Subjects.ProductCreated;
}
