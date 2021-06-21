import Joi from "joi";

export default {
  create: Joi.object().keys({
    body: Joi.object()
      .keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        body: Joi.string().required(),
      }).required()
  }),
};
