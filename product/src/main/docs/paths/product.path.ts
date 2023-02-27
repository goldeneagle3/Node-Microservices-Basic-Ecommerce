export const postPath = {
  get: {
    tags: ["Product"],
    summary: "List All Products",
    description: "You must be authorized to get all products.",
    responses: {
      200: {
        description: "Success with product array",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/products",
            },
          },
        },
      },
      204: {
        description: "Success but no content",
      },
      401: {
        $ref: "#/components/unauthorized",
      },
      403: {
        $ref: "#/components/forbidden",
      },
      404: {
        $ref: "#/components/notFound",
      },
      500: {
        $ref: "#/components/serverError",
      },
    },
  },
  post: {
    tags: ["Product"],
    summary: "Product API",
    description: "You can create products with this endpoint.",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/addProductParams",
          },
        },
      },
    },
    responses: {
      204: {
        description: "Success, you created a new product.",
      },
      401: {
        $ref: "#/components/unauthorized",
      },
      403: {
        $ref: "#/components/forbidden",
      },
      404: {
        $ref: "#/components/notFound",
      },
      500: {
        $ref: "#/components/serverError",
      },
    },
  },
};
