import chatsService from "../services/chatsServices.js";

export const getChats = async (req, res, next) => {
  try {
    const chats = await chatsService.getChats();
    res.send(chats);
  } catch (e) {
    next(e);
  }
};
