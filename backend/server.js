import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";
import "./jobs/crmSyncJob.js";

// Load env variables FIRST
dotenv.config();

// Connect Database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/leads", leadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
