import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import "./bd.js";
import YAML from "yamljs";
import SwaggerUI from "swagger-ui-express";

import chatsRouter from "./routes/chatsRouter.js";

const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/chats", chatsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
