import { IHttpResponse } from "presentation/protocols/htttp.interface";

export interface IController<T = any> {
  handle: (request: T) => Promise<IHttpResponse>;
}
