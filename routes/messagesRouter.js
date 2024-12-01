import express from "express";
import { getMessages, sendMessage } from "../controllers/messagesController.js";
import { sendMessageSchema } from "../schemas/messagesSchemas.js";
import isValidId from "../middlewares/isValidId.js";
import validateBody from "../middlewares/validateBody.js";

const messagesRouter = express.Router();

messagesRouter.get("/:id", isValidId, getMessages);
messagesRouter.post("/", validateBody(sendMessageSchema), sendMessage);

export default messagesRouter;
