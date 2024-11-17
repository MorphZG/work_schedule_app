import express from "express";
import { getAllSchedules, getScheduleById, createSchedule, updateSchedule, deleteSchedule } from "../controllers/scheduleController.js";

const router = express.Router();

router.get("/", getAllSchedules);
router.get("/:id", getScheduleById);
router.post("/", createSchedule);
router.patch("/:id", updateSchedule);
router.delete("/:id", deleteSchedule);

export default router;