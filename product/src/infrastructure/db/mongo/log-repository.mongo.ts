import { ILogErrorRepository } from "dal/protocols/db/log/log-error-repo.interface";
import { MongoHelper } from "infrastructure/db/mongo/mongo-helper";

export class LogMongoRepository implements ILogErrorRepository {
  async logError(stack: string): Promise<void> {
    const errorCollection = MongoHelper.getCollection("errors");
    errorCollection.insertOne({
      stack,
      date: new Date(),
    });
  }
}
