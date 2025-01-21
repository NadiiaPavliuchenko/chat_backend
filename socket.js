import { Server } from "socket.io";
import { messages } from "./models/messages.js";
import { chats } from "./models/chats.js";

export const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      // origin: "https://npavl-chat.netlify.app/",
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("sendMessage", async (messageData) => {
      try {
        const newMessage = await messages.create(messageData);
        io.to(messageData.chatId).emit("newMessage", newMessage);
      } catch (e) {
        console.error(e.message);
      }
    });

    socket.on("getLastMessage", async (chatId) => {
      try {
        const lastMessageInChat = await messages
          .findOne({ chatId })
          .sort({ sentAt: -1 });

        socket.emit("lastMessage", lastMessageInChat);
      } catch (e) {
        console.error("Error while getting last message:", e);
      }
    });

    socket.on("markIsRead", async ({ messageId, isRead }) => {
      try {
        const readMessage = await messages.findByIdAndUpdate(
          { _id: messageId },
          { isRead }
        );
        io.to(readMessage.chatId).emit("readMessage", readMessage);
        console.log("read", readMessage);
      } catch (e) {
        console.error("Error while marking message as read:", e.message);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
  return io;
};
