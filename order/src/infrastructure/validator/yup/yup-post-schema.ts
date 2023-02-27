import * as yup from "yup";

const yupPostSchema = yup.object({
  title: yup.string().required(),
  author: yup.string().required(),
  text: yup.string().min(8).required(),
});

export { yupPostSchema };
