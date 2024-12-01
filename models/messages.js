import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chats",
    },
    sender: {
      type: String,
      required: true,
    },
    sentAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: null,
    },
  },
  { versionKey: false }
);

export const messages = mongoose.model("Messages", messagesSchema);
