import { IHttpResponse } from "presentation/protocols/htttp.interface";

export interface IMiddleware<T = any> {
  handle: (httpRequest: T) => Promise<IHttpResponse>;
}
