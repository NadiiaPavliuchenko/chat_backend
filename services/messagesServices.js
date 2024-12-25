import { messages } from "../models/messages.js";
import { chats } from "../models/chats.js";

const getMessages = async (id) => {
  const messagesList = await messages.find({ chatId: id });
  messagesList.sort((a, b) => {
    return new Date(b.sentAt) - new Date(a.sentAt);
  });
  return messagesList;
};

const addMessage = async ({ text, chatId, sender }) => {
  const newMessage = await messages.create({ text, chatId, sender });
  if (!newMessage) {
    return null;
  } else {
    await chats.findByIdAndUpdate(
      { _id: chatId },
      {
        lastMessage: {
          text,
          sender,
          createdAt: new Date(),
        },
      },
      { new: true }
    );
    return newMessage;
  }
};

const editMessage = async (id, { text }) => {
  const editedMessage = messages.findByIdAndUpdate(
    { _id: id },
    { text, updatedAt: Date.now },
    { new: true }
  );
  if (!editedMessage) {
    return null;
  } else {
    return editedMessage;
  }
};
export default { getMessages, addMessage, editMessage };
