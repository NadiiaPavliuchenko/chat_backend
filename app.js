import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import "./bd.js";
import http from "http";
import { Server } from "socket.io";
import YAML from "yamljs";
import SwaggerUI from "swagger-ui-express";

import chatsRouter from "./routes/chatsRouter.js";
import messagesRouter from "./routes/messagesRouter.js";

import { messages } from "./models/messages.js";

const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/chats", chatsRouter);
app.use("/api/messages", messagesRouter);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://npavl-chat.netlify.app/",
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

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
