import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dayRoutes from "./routes/day.js";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/day", dayRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });