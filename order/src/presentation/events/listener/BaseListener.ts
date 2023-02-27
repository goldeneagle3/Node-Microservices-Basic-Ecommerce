import { Subjects } from "@presentation/events/subjects";
import { IMessageBusListener } from "@presentation/events/protocols/baseEvents.interface";
import { ILogging } from "@utils/logging/protocols/logging.interface";

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class BaseListener<T extends Event>
  implements IMessageBusListener
{
  abstract subject: T["subject"];
  abstract onMessage(data: T["data"]): void;

  constructor(
    private readonly channel: any,
    protected readonly logger: ILogging
  ) {}

  listen(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.logger.info("Waiting for messages...");
      this.channel.assertQueue(this.subject);
      this.channel.consume(this.subject, (msg: any) => {
        this.onMessage(this.parseMessage(msg));
        this.channel.ack(msg);
        this.logger.info(
          `Message in ${this.subject.toUpperCase()} queue received successfully.`
        );
      });
    });
  }

  parseMessage(msg: any) {
    const data = msg.content;
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf8"));
  }
}
