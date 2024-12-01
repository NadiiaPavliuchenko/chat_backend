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

export const editMessage = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      throw HttpError(404, "Body should have at least one value");
    }
    const editedMessage = await messagesService.editMessage(
      req.params.id,
      req.body
    );
    if (!editedMessage) {
      throw HttpError(404, "Not found");
    }
    res.send(editedMessage);
  } catch (e) {
    next(e);
  }
};
