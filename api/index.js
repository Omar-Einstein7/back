// index.js
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "../config/db.js";
import authRoutes from "../routes/authRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
connectDB();
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
