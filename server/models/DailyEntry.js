import mongoose from "mongoose";

const DailyEntrySchema = new mongoose.Schema({
  date: { type: String, required: true }, // YYYY-MM-DD
  tasks: { type: Array, default: [] },
  thoughts: { type: String, default: "" },
  achievements: { type: Array, default: [] },
  schedule: { type: Array, default: [] },
});

export default mongoose.model("DailyEntry", DailyEntrySchema);