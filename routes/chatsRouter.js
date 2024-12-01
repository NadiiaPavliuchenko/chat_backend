import express from "express";
import { getChats, createChat } from "../controllers/chatsControllers.js";
import { createChatSchema } from "../schemas/newChatSchema.js";
import isValidId from "../middlewares/isValidId.js";
import validateBody from "../middlewares/validateBody.js";

const chatsRouter = express.Router();

chatsRouter.get("/", getChats);
chatsRouter.post("/", validateBody(createChatSchema), createChat);

export default chatsRouter;
