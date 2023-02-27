import { InfoMessages } from "@presentation/helpers/messages/info-messages.helper";
import { ILogging } from "@utils/logging/protocols/logging.interface";
import { ILogErrorRepository } from "dal/protocols/db/log/log-error-repo.interface";
import { IController } from "presentation/protocols/controller.interface";
import { IHttpResponse } from "presentation/protocols/htttp.interface";

export class LogControllerDecorator implements IController {
  constructor(
    private readonly controller: IController,
    private readonly logErrorRepository: ILogErrorRepository,
    private readonly logger: ILogging
  ) {}

  async handle(request: any): Promise<IHttpResponse> {
    const httpResponse = await this.controller.handle(request);
    if (httpResponse.statusCode > 399 && httpResponse.statusCode <= 500) {
      this.logger.warn(httpResponse.body.message);
      await this.logErrorRepository.logError(httpResponse.body);
    }
    if (httpResponse.statusCode === 500) {
      this.logger.error(httpResponse.body);
      await this.logErrorRepository.logError(httpResponse.body.stack);
    }
    if (httpResponse.statusCode < 400 && httpResponse.statusCode > 299) {
      this.logger.info(InfoMessages.requestMultipleChoises);
    }
    if (httpResponse.statusCode > 199 && httpResponse.statusCode < 300) {
      this.logger.info(InfoMessages.requestWithSuccess);
    }
    return httpResponse;
  }
}
