import Joi from "joi";

export const createChatSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});
