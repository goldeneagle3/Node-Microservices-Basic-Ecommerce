import envConfig from "@main/config/env.config";
import { MongoHelper } from "@infrastructure/db/mongo/mongo-helper";
import { rabbitMQ } from "@infrastructure/message_brokers/rabbitMQ/rabbitMQ-helper";
import { makeOrderCreatedListener } from "@main/factories/events/listener/listener-order-created.factory";

MongoHelper.connect(envConfig.mongoUri)
  .then(async () => {
    try {
      const { setupApp } = await import("@main/config/app.config");
      await rabbitMQ.connect("amqp://guest:guest@localhost:5672/");
      makeOrderCreatedListener().listen();
      const app = await setupApp();
      app.listen(envConfig.port, () =>
        console.log(`Server running at http://localhost:${envConfig.port}`)
      );
    } catch (error) {
      console.log(error);
    }
  })
  .catch(console.error);
