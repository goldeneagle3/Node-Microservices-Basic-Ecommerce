import WinstonLogger from "@infrastructure/logging/winston/winston.logger";
import { rabbitMQ } from "@infrastructure/message_brokers/rabbitMQ/rabbitMQ-helper";
import { makeDBProductOrdered } from "@main/factories/usecases/product-ordered.factory";
import { OrderCreatedListener } from "@presentation/events/listener/order-created.listener";
import { IMessageBusListener } from "@presentation/events/protocols/baseEvents.interface";

export const makeOrderCreatedListener = (): IMessageBusListener => {
  return new OrderCreatedListener(
    rabbitMQ.channel,
    WinstonLogger,
    makeDBProductOrdered()
  );
};
