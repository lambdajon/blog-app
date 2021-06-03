import Joi from "joi";

export default {
  create: Joi.object().keys({
    body: Joi.object()
      .keys({
        name: Joi.string().required(),
      })
      .required(),
  }),
  load: Joi.object().keys({
    params: Joi.object()
      .keys({
        id: Joi.string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .required(),
      })
      .required(),
  }),
  update: Joi.object().keys({
    params: Joi.object()
      .keys({
        id: Joi.string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .required(),
      })
      .required(),
    body: Joi.object().keys({
      name: Joi.string().optional(),
    }),
  }),
  remove: Joi.object().keys({
    params: Joi.object()
      .keys({
        id: Joi.string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .required(),
      })
      .required(),
  }),
};
