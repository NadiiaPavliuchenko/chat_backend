import { chats } from "../models/chats.js";

const getChats = () => {
  const chatsList = chats.find({});
  return chatsList;
};

export default { getChats };
