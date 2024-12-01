import { messages } from "../models/messages.js";

const getMessages = async (id) => {
  const messagesList = await messages.find({ chatId: id });
  return messagesList;
};

const addMessage = async ({ text, chatId, sender }) => {
  const newMessage = await messages.create({ text, chatId, sender });
  if (!newMessage) {
    return null;
  } else {
    return newMessage;
  }
};

export default { getMessages, addMessage };
