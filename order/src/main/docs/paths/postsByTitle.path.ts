export const postsByTitlePath = {
  get: {
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    tags: ["Post"],
    summary: "Posts By Title",
    description: "You can filter posts by their titles.",
    parameters: [
      {
        in: "query",
        name: "title",
        schema: {
          type: "string",
        },
        description: "Provide an input to search posts by title.",
      },
    ],
    responses: {
      200: {
        description: "Success with post array",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/posts",
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
};
