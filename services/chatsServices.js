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

const updateChat = ({ _id, firstName, lastName }) => {
  const updatedChat = chats.findByIdAndUpdate(id, { firstName, lastName });
  if (!updatedChat) {
    return null;
  } else {
    return updatedChat;
  }
};

export default { getChats, createChat };
