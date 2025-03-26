import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from "./route/authRoute.js";


dotenv.config();
connectDB();

const app= express();
app.use(express.json());
app.use(cors())
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Backend is running with ES6!");
  });

  const PORT = process.env.PORT || 5100;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));