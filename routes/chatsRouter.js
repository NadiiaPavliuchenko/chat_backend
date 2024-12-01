import express from "express";
import { getChats } from "../controllers/chatsControllers.js";
import isValidId from "../middlewares/isValidId.js";
import validateBody from "../middlewares/validateBody.js";

const chatsRouter = express.Router();

chatsRouter.get("/", getChats);

export default chatsRouter;
