import paths from "@main/docs/paths";
import components from "@main/docs/components";
import schemas from "@main/docs/schemas";

export default {
  openapi: "3.0.0",
  info: {
    title: "Microservices - Basic E-Commerce App",
    description: `
    - Learning and implementing Microservices with Clean Architecture and Clean Code 
    - Learning Docker , RabbitMQ and HAProxy


    Used Technologies

    - Typescript
    - Express.JS
    - MongoDB
    - Winston.JS
    - SwaggerUI
    - RabbitMQ
    - HAProxy
    - Docker
    `,
    version: "1.0.0",
    contact: {
      name: "Ensar Ezber",
    },
  },
  externalDocs: {
    description: "Checkout Order Service",
    url: "http://localhost:8080/api/orders",
  },
  servers: [
    {
      url: "/api",
      description: "Product Service",
    },
  ],
  tags: [
    {
      name: "Product",
      description: "Product API",
    },
  ],
  paths,
  schemas,
  components,
};
