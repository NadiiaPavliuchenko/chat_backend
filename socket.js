import { Server } from "socket.io";
import { messages } from "./models/messages.js";
import messagesServices from "./services/messagesServices.js";

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
    let chatId;

    socket.on("sendMessage", async (messageData) => {
      try {
        const newMessage = await messages.create(messageData);
        chatId = messageData.chatId;
        io.to(chatId).emit("newMessage", newMessage);

        setTimeout(async () => {
          try {
            const replyText = await messagesServices.getReplyQuote();

            const replyData = {
              text: replyText.quote,
              sender: "bot",
              chatId: chatId,
              sentAt: new Date(),
            };

            const replyMessage = await messages.create(replyData);
            io.to(chatId).emit("getReply", replyMessage);
          } catch (e) {
            console.error(e);
          }
        }, 3000);
      } catch (e) {
        console.error(e.message);
      }
    });
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
  return io;
};
