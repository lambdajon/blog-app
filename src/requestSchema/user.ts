import Joi from "joi";

export default {
  register: Joi.object().keys({
    body: Joi.object()
      .keys({
        email: Joi.string().email().required(),
        firsName: Joi.string().required(),
        lastName: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.ref("password"),
      })
      .with("password", "confirmPassword"),
  }),
};
