import WinstonLogger from "@infrastructure/logging/winston/winston.logger";
import { LoggingDevice } from "@utils/logging/loggers/logger.logging";
import { ILogging } from "@utils/logging/protocols/logging.interface";

export const makeLoggingHelper = (): ILogging => {
  return new LoggingDevice(WinstonLogger);
};
