import WinstonLogger from "@infrastructure/logging/winston/winston.logger";
import { rabbitMQ } from "@infrastructure/message_brokers/rabbitMQ/rabbitMQ-helper";
import { IProductCreatedPublisher } from "@presentation/events/protocols/product-created-publisher.interface";
import { ProductCreatedPublisher } from "@presentation/events/publisher/product-created.publish";


export const makeProductCreatedPublisher = (): IProductCreatedPublisher => {
  return new ProductCreatedPublisher(rabbitMQ.channel, WinstonLogger);
};
