import WinstonLogger from "@infrastructure/logging/winston/winston.logger";
import { rabbitMQ } from "@infrastructure/message_brokers/rabbitMQ/rabbitMQ-helper";
import { IOrderCreatedPublisher } from "@presentation/events/protocols/order-created-publisher.interface";
import { OrderCreatedPublisher } from "@presentation/events/publisher/order-created.publisher";

export const makeOrderCreatedPublisher = (): IOrderCreatedPublisher => {
  return new OrderCreatedPublisher(rabbitMQ.channel, WinstonLogger);
};
