import paths from "@main/docs/paths";
import components from "@main/docs/components";
import schemas from "@main/docs/schemas";

export default {
  openapi: "3.0.0",
  info: {
    title: "DDD - Basic Post App",
    description: `
    Learning Clean Architecture and Domain Driven Design with OOP and Dependency Injection 



    Used Technologies

    - Typescript
    - Express.JS
    - MongoDB
    - Winston.JS
    - SwaggerUI
    `,
    version: "1.0.0",
    contact: {
      name: "Ensar Ezber",
    },
    license: {
      name: "MIT",
      url: "https://google.com",
    },
  },
  externalDocs: {
    description: "Complete DDD",
    url: "https://google.com",
  },
  servers: [
    {
      url: "/api",
      description: "Initial Server",
    },
  ],
  tags: [
    {
      name: "Login",
      description: "Sign in to API",
    },
    {
      name: "Post",
      description: "Post API",
    },
  ],
  paths,
  schemas,
  components,
};
