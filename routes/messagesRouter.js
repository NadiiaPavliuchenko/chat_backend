import express from "express";
import { getMessages } from "../controllers/messagesController.js";
import isValidId from "../middlewares/isValidId.js";

const messagesRouter = express.Router();

messagesRouter.get("/:id", isValidId, getMessages);

export default messagesRouter;
