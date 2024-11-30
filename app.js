import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import "./bd.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
