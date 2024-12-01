import Joi from "joi";
import objectId from "joi-objectid";

Joi.objectId = objectId(Joi);

export const sendMessageSchema = Joi.object({
  text: Joi.string().required(),
  chatId: Joi.objectId().required(),
  sender: Joi.string().required(),
});
