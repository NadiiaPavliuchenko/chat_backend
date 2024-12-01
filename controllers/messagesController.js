import messagesService from "../services/messagesServices.js";

export const getMessages = async (req, res, next) => {
  try {
    const messagesList = await messagesService.getMessages(req.params.id);
    res.send(messagesList);
  } catch (e) {
    next(e);
  }
};

export const sendMessage = async (req, res, next) => {
  try {
    const newMessage = await messagesService.addMessage(req.body);
    res.status(201).send(newMessage);
  } catch (e) {
    next(e);
  }
};
