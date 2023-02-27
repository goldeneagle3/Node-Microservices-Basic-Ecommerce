export const addPostParamsSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
    },
    text: {
      type: "string",
    },
  },
  required: ["title", "text"],
};
