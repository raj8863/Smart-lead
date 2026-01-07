import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  country: String,
  confidence: Number,
  status: {
    type: String,
    enum: ["Verified", "To Check"],
  },
  synced: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default mongoose.model("Lead", leadSchema);
