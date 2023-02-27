export const postSchema = {
  type: 'object',
  properties: {
    id: {
      type:'string'
    },
    title: {
      type:'string'
    },
    author: {
      type:'string'
    },
    text: {
      type:'string'
    }
  },
  required: ['id', 'question', 'answers', 'date', 'didAnswer']
}