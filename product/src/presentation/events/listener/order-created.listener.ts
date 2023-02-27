import { IProductOrdered } from "@domain/use-cases/product-ordered";
import { BaseListener } from "@presentation/events/listener/BaseListener";
import { IOrderCreatedEvent } from "@presentation/events/order-created.interface";
import { Subjects } from "@presentation/events/subjects";
import { ILogging } from "@utils/logging/protocols/logging.interface";

export class OrderCreatedListener extends BaseListener<IOrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;

  constructor(
    channel,
    logger: ILogging,
    private readonly productOrderedDb: IProductOrdered
  ) {
    super(channel, logger);
  }

  async onMessage(data: IOrderCreatedEvent["data"]): Promise<void> {
    await this.productOrderedDb.productOrdered(data.product.id);
    this.logger.info(
      "The transactions related with " +
        this.subject.toUpperCase() +
        " queue is done successfully."
    );
  }
}
