import { LogMongoRepository } from "@infrastructure/db/mongo/log-repository.mongo";
import { LogControllerDecorator } from "@main/decorators/log-controller.decorator";
import { makeLoggingHelper } from "@main/factories/helpers/logging-helper.factories";
import { IController } from "@presentation/protocols/controller.interface";

export const makeLogControllerDecorator = (
  controller: IController
): IController => {
  const logMongoRepository = new LogMongoRepository();
  return new LogControllerDecorator(
    controller,
    logMongoRepository,
    makeLoggingHelper()
  );
};
