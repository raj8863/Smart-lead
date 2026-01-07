import express from "express";
import { processLeads } from "../controllers/leadController.js";

const router = express.Router();
router.post("/process", processLeads);

export default router;
