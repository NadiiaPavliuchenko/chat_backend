import express from "express";
import {
  getChats,
  getOneChat,
  createChat,
  updateChat,
  deleteChat,
} from "../controllers/chatsControllers.js";
import { createChatSchema, updateChatSchema } from "../schemas/chatSchemas.js";
import isValidId from "../middlewares/isValidId.js";
import validateBody from "../middlewares/validateBody.js";

const chatsRouter = express.Router();

chatsRouter.get("/", getChats);
chatsRouter.get("/:id", isValidId, getOneChat);
chatsRouter.post("/", validateBody(createChatSchema), createChat);
chatsRouter.put("/:id", isValidId, validateBody(updateChatSchema), updateChat);
chatsRouter.delete("/:id", isValidId, deleteChat);

export default chatsRouter;
