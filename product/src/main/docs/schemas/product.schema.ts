export const productSchema = {
  type: 'object',
  properties: {
    id: {
      type:'string'
    },
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
  required: ['id', 'name', 'price', 'description', 'inStock']
}