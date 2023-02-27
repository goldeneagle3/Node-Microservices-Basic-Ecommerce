import { IProductCreateEvent } from "@presentation/events/product-created.interface";

export interface IProductCreatedPublisher {
  publish: (data: IProductCreatedPublisher.Params) => Promise<void>;
}

export namespace IProductCreatedPublisher {
  export type Params = IProductCreateEvent["data"];
}
