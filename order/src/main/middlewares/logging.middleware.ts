import morgan, { StreamOptions } from "morgan";

import WinstonLogger from "@infrastructure/logging/winston/winston.logger";

const stream: StreamOptions = {
  write: (message) => WinstonLogger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export { morganMiddleware };
