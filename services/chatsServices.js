import { chats } from "../models/chats.js";

const getChats = async () => {
  const chatsList = await chats.find({});
  chatsList.sort((a, b) => {
    const dateA = a.lastMessage ? new Date(a.lastMessage.createdAt) : 0;
    const dateB = b.lastMessage ? new Date(b.lastMessage.createdAt) : 0;
    return dateB - dateA;
  });
  return chatsList;
};

const getOneChat = async (id) => {
  const chat = await chats.findOne({ _id: id });
  return chat;
};

const createChat = async ({ firstName, lastName }) => {
  const newChat = await chats.create({ firstName, lastName });
  if (!newChat) {
    return null;
  } else {
    return newChat;
  }
};

const updateChat = async (id, { firstName, lastName }) => {
  const updatedChat = await chats.findByIdAndUpdate(
    { _id: id },
    { firstName, lastName },
    { new: true }
  );
  if (!updatedChat) {
    return null;
  } else {
    return updatedChat;
  }
};

const deleteChat = async (id) => {
  const deletedChat = await chats.findOneAndDelete({ _id: id });
  if (deletedChat === null) {
    return null;
  }
  return deletedChat;
};

export default { getChats, getOneChat, createChat, updateChat, deleteChat };
