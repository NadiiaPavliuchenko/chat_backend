import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  chat_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chats",
  },
  author: {
    type: String,
    required: true,
  },
  sent_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

export const messages = mongoose.Model("Messages", messagesSchema);
