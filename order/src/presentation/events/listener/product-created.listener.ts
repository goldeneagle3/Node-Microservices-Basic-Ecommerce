import { IAddProduct } from "@domain/use-cases/product-add";
import { BaseListener } from "@presentation/events/listener/BaseListener";
import { IProductCreateEvent } from "@presentation/events/product-created.interface";
import { Subjects } from "@presentation/events/subjects";
import { ILogging } from "@utils/logging/protocols/logging.interface";

export class ProductCreatedListener extends BaseListener<IProductCreateEvent> {
  subject: Subjects.ProductCreated = Subjects.ProductCreated;

  constructor(
    channel,
    logger: ILogging,
    private readonly addProductDB: IAddProduct
  ) {
    super(channel, logger);
  }

  async onMessage(data: IProductCreateEvent["data"]) {
    await this.addProductDB.create(data);
    this.logger.info(
      "The transactions related with " +
        this.subject.toUpperCase() +
        " queue is done successfully."
    );
  }
}
