import chatsService from "../services/chatsServices.js";
import HttpError from "../middlewares/httpError.js";

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

export const updateChat = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      throw HttpError(404, "Body should have at least one value");
    }
    const updatedChat = await chatsService.updateChat(req.params.id, req.body);
    if (!updateChat) {
      throw HttpError(404, "Not found");
    }
    res.send(updatedChat);
  } catch (e) {
    next(e);
  }
};

export const deleteChat = async (req, res, next) => {
  try {
    const deletedChat = await chatsService.deleteChat(req.params.id);
    if (!deleteChat) {
      throw HttpError("404", "Not found");
    }
    res.send(deletedChat);
  } catch (e) {
    next(e);
  }
};

export const searchChats = async (req, res, next) => {
  try {
    const foundChats = await chatsService.searchChats(req.query);
    res.send(foundChats);
  } catch (e) {
    next(e);
  }
};
