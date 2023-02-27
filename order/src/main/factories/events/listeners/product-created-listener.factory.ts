import WinstonLogger from "@infrastructure/logging/winston/winston.logger";
import { rabbitMQ } from "@infrastructure/message_brokers/rabbitMQ/rabbitMQ-helper";
import { makeDBAddProduct } from "@main/factories/usecases/add-product.factory";
import { ProductCreatedListener } from "@presentation/events/listener/product-created.listener";
import { IMessageBusListener } from "@presentation/events/protocols/baseEvents.interface";

export const makeProductCreatedListener = (): IMessageBusListener => {
  return new ProductCreatedListener(
    rabbitMQ.channel,
    WinstonLogger,
    makeDBAddProduct()
  );
};
