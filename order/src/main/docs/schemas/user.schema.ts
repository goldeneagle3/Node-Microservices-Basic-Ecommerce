export const userSchema = {
  type: 'object',
  properties: {
    accessToken: {
      type: 'string'
    },
    username: {
      type: 'string'
    }
  },
  required: ['accessToken', 'username']
}