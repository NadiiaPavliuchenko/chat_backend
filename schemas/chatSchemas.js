import Joi from "joi";

export const createChatSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

export const updateChatSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
});
