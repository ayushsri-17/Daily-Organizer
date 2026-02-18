import express from "express";
import DailyEntry from "../models/DailyEntry.js";

const router = express.Router();

router.get("/:date", async (req, res) => {
  const { date } = req.params;

  let entry = await DailyEntry.findOne({ date });
  if (!entry) {
    entry = await DailyEntry.create({ date });
  }

  res.json(entry);
});

router.post("/:date", async (req, res) => {
  const { date } = req.params;

  const entry = await DailyEntry.findOneAndUpdate(
    { date },
    req.body,
    { new: true, upsert: true }
  );

  res.json(entry);
});

export default router;