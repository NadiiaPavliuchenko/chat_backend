import messagesService from "../services/messagesServices.js";

export const getMessages = async (req, res, next) => {
  try {
    const messagesList = await messagesService.getMessages(req.params.id);
    res.send(messagesList);
  } catch (e) {
    next(e);
  }
};
