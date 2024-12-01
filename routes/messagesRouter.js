import express from "express";

const messagesRouter = express.Router();

messagesRouter.get("/chatId", getMessages);

export default messagesRouter;
