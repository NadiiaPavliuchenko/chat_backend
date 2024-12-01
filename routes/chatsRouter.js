import express from "express";
import {
  getChats,
  createChat,
  updateChat,
  deleteChat,
  searchChats,
} from "../controllers/chatsControllers.js";
import { createChatSchema, updateChatSchema } from "../schemas/chatSchemas.js";
import isValidId from "../middlewares/isValidId.js";
import validateBody from "../middlewares/validateBody.js";

const chatsRouter = express.Router();

chatsRouter.get("/", getChats);
chatsRouter.post("/", validateBody(createChatSchema), createChat);
chatsRouter.put("/:id", isValidId, validateBody(updateChatSchema), updateChat);
chatsRouter.delete("/:id", isValidId, deleteChat);
chatsRouter.get("/search", searchChats);

export default chatsRouter;
