export const addProductParamsSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    isActive: {
      type: "boolean",
    },
    inStock: {
      type: "boolean",
    },
    price: {
      type: "number",
    },
    quantity: {
      type: "number",
    },
  },
  required: ["name", "description", "isActive", "inStock", "price", "quantity"],
};
