export interface IMessageBusPublisher {
  publish: (data: any) => Promise<void>;
}

export interface IMessageBusListener {
  listen: () => Promise<void>;
}
