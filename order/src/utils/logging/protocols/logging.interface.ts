export interface ILogging {
  error: (message?: string) => void;
  warn: (message?: string) => void;
  info: (message?: string) => void;
  http: (message?: string) => void;
  verbose: (message?: string) => void;
  debug: (message?: string) => void;
}
