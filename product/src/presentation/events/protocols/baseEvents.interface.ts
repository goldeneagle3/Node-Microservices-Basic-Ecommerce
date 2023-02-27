export interface IMessageBusPublisher {
  publish: (connection:any) => Promise<void>
}

export interface IMessageBusListener {
  listen: () => Promise<void>
}