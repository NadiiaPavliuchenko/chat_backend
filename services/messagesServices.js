import { messages } from "../models/messages.js";

const getMessages = async (id) => {
  const messagesList = await messages.find({ chatId: id });
  return messagesList;
};

export default { getMessages };
