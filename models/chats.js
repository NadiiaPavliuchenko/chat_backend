import mongoose from "mongoose";

const chatsSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    lastMessage: {
      type: {
        text: String,
        sender: String,
        createdAt: {
          type: Date,
          default: null,
        },
      },
      required: false,
    },
  },
  { versionKey: false }
);

export const chats = mongoose.model("Chats", chatsSchema);
