import express from "express";
import {
  getMessages,
  sendMessage,
  editMessage,
} from "../controllers/messagesController.js";
import {
  sendMessageSchema,
  editMessageSchema,
} from "../schemas/messagesSchemas.js";
import isValidId from "../middlewares/isValidId.js";
import validateBody from "../middlewares/validateBody.js";

const messagesRouter = express.Router();

messagesRouter.get("/:id", isValidId, getMessages);
messagesRouter.post("/", validateBody(sendMessageSchema), sendMessage);
messagesRouter.put(
  "/:id",
  isValidId,
  validateBody(editMessageSchema),
  editMessage
);

export default messagesRouter;
