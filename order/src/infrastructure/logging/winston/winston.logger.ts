import winston from "winston";
import fs from "fs";
import debug from "debug";

const PATHS = {
  LOG: `${process.cwd()}/logs`,
  LOG_VERBOSE: `${process.cwd()}/logs/_verbose.log`,
  LOG_ERROR: `${process.cwd()}/logs/_error.log`,
  LOG_WARN: `${process.cwd()}/logs/_warn.log`,
  LOG_INFO: `${process.cwd()}/logs/_info.log`,
  LOG_HTTP: `${process.cwd()}/logs/_http.log`,
};
// ensure log directory exists
(() => fs.existsSync(PATHS.LOG) || fs.mkdirSync(PATHS.LOG))();

export const dbg = debug("express:server");

// Define different colors for each level.
// Colors make the log message more visible,
// adding the ability to focus or ignore messages.
const colors = {
  error: "bgBrightRed",
  warn: "red",
  verbose: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

// Chose the aspect of your log customizing the log format.
const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.prettyPrint({ colorize: true }),
  winston.format.splat(),
  winston.format.simple(),
  winston.format.json(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message.trim()}`
  )
);

const WinstonLogger = winston.createLogger({
  exitOnError: false,
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.json(),
    winston.format.splat(),
    winston.format.align(),
    winston.format.prettyPrint({ colorize: true }),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message.trim()}`
    )
  ),
  transports: [
    new winston.transports.File({
      filename: PATHS.LOG_VERBOSE,
      level: "verbose",
      maxFiles: 2,
      maxsize: 5242880, // 5MB
    }),
    new winston.transports.File({
      filename: PATHS.LOG_INFO,
      level: "info",
      maxFiles: 2,
      maxsize: 5242880, // 5MB
    }),
    new winston.transports.File({
      filename: PATHS.LOG_ERROR,
      handleExceptions: true,
      level: "error",
      maxFiles: 2,
      maxsize: 5242880, // 5MB
    }),
    new winston.transports.File({
      filename: PATHS.LOG_WARN,
      level: "warn",
      maxFiles: 2,
      maxsize: 5242880, // 5MB
    }),
    new winston.transports.File({
      filename: PATHS.LOG_HTTP,
      level: "http",
      maxFiles: 2,
      maxsize: 5242880, // 5MB
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  WinstonLogger.add(
    new winston.transports.Console({
      handleExceptions: true,
      format,
      level: "debug",
    })
  );
}

export default WinstonLogger;
