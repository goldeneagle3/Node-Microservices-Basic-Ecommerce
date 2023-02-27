export const postPath = {
  get: {
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    tags: ["Post"],
    summary: "List All Posts",
    description: "You must be authorized to get all posts.",
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
  post: {
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    tags: ["Post"],
    summary: "Post API",
    description: "You must be authorized to create posts.",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/addPostParams",
          },
        },
      },
    },
    responses: {
      204: {
        description: "Success, you created a new post.",
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
