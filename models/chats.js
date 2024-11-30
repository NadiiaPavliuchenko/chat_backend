import mongoose from "mongoose";

const chatsSchema = new mongoose.Schema({
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
});

export const chats = mongoose.Model("Chats", chatsSchema);
