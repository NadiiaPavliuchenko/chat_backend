import { chats } from "../models/chats.js";

const getChats = () => {
  const chatsList = chats.find({});
  chatsList.sort("-createdAt");
  return chatsList;
};

const createChat = ({ firstName, lastName }) => {
  const newChat = chats.create({ firstName, lastName });
  if (!newChat) {
    return null;
  } else {
    return newChat;
  }
};

const updateChat = (id, { firstName, lastName }) => {
  const updatedChat = chats.findByIdAndUpdate(
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

export default { getChats, createChat, updateChat, deleteChat };
