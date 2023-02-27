import {
  userSchema,
  signinParamsSchema,
  signUpParamsSchema,
  errorSchema,
  addPostParamsSchema,
  postSchema,
  postsSchema
} from "./schemas/index";

export default {
  user: userSchema,
  signinParams: signinParamsSchema,
  signUpParams: signUpParamsSchema,
  error: errorSchema,
  addPostParams: addPostParamsSchema,
  post: postSchema,
  posts: postsSchema,
};
