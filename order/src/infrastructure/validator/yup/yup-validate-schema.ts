export const yupValidate = (schema: any, inputBody: object) => {
  const result = schema.validate(inputBody);
  return result;
};
