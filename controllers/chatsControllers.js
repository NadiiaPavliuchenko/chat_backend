import chatsService from "../services/chatsServices.js";

export const getChats = async (req, res, next) => {
  try {
    const chats = await chatsService.getChats();
    res.send(chats);
  } catch (e) {
    next(e);
  }
};

export const createChat = async (req, res, next) => {
  try {
    const newChat = await chatsService.createChat(req.body);
    res.status(201).send(newChat);
  } catch (e) {
    next(e);
  }
};
