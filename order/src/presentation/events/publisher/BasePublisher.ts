import { Subjects } from "@presentation/events/subjects";
import { IMessageBusPublisher } from "@presentation/events/protocols/baseEvents.interface";
import { ILogging } from "@utils/logging/protocols/logging.interface";

export interface Event {
  subject: Subjects;
  data: any;
}

export abstract class BasePublisher<T extends Event>
  implements IMessageBusPublisher
{
  abstract subject: T["subject"];

  constructor(
    private readonly channel: any,
    private readonly logger: ILogging
  ) {}

  publish(data: T["data"]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.channel.assertQueue(this.subject);
      this.channel.sendToQueue(this.subject, Buffer.from(JSON.stringify(data)));
      this.logger.info(
        `Message with ${this.subject.toUpperCase()} queue is sent successfully.`
      );
    });
  }
}
