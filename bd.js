import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI)
  .then(() => console.log("DB connected!"))
  .catch((e) => {
    console.log("DB connection error", e.message);
    process.exit(1);
  });
