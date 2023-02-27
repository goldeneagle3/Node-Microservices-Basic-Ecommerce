export const postsByUserPath = {
  get: {
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    tags: ["Post"],
    summary: "Posts By User",
    description: "You can list all your posts.",
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
