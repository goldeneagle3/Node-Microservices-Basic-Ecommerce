import { IOrderCreatedEvent } from "@presentation/events/order-created.interface";

export interface IOrderCreatedPublisher {
  publish: (data: IOrderCreatedPublisher.Params) => Promise<void>;
}

export namespace IOrderCreatedPublisher {
  export type Params = IOrderCreatedEvent["data"];
}
