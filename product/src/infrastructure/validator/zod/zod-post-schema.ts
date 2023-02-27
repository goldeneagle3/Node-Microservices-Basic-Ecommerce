import { z } from "zod";

export const zodPostSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required and must be string.",
    }),
    author: z.string({
      required_error: "Author is required and must be string.",
    }),
    text: z
      .string({ required_error: "Text is required and must be string." })
      .min(8, "Text must contains 8 chars at least."),
  }),
});
