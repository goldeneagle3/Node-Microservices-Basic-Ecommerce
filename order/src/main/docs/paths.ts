import {
  signUpPath,
  signinPath,
  postPath,
  postsByTitlePath,
  postsByUserPath,
} from "./paths/index";

export default {
  "/signup": signUpPath,
  "/signin": signinPath,
  "/posts": postPath,
  "/posts/search/by": postsByTitlePath,
  "/posts/by/user": postsByUserPath,
};
