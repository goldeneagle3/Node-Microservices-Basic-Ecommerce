import { ILogging } from "@utils/logging/protocols/logging.interface";

export class LoggingDevice implements ILogging {
  constructor(private readonly loggingDevice: ILogging) {}

  verbose(message: string) {
    this.loggingDevice.verbose(message);
  }

  error(message: string) {
    this.loggingDevice.error(message);
  }

  warn(message: string) {
    this.loggingDevice.warn(message);
  }

  info(message: string) {
    this.loggingDevice.info(message);
  }

  http(message: string) {
    this.loggingDevice.http(message);
  }

  debug(message: string) {
    this.loggingDevice.debug(message);
  }
}
