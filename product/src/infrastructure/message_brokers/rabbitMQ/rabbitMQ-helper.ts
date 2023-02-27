import client, { Connection } from "amqplib";

class RabbitMQ {
  private _channel: Connection;

  get channel() {
    if (!this._channel) {
      throw new Error("RabbitMQ cannot connected to server.");
    }

    return this._channel;
  }

  async connect(conf: any) {
    const connection = await client.connect(conf);
    return (this._channel = await connection.createChannel());
  }
}

export const rabbitMQ = new RabbitMQ();
