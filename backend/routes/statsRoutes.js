import express from "express";
import {
  getOverallStats,
  getEmployeeStats,
  getScheduleStats,
  createStats,
  updateStats,
  deleteStats,
} from "../controllers/statsController.js";

const router = express.Router();

router.get("/", getOverallStats);
router.get("/employee/:id", getEmployeeStats);
router.get("/schedule/:id", getScheduleStats);
router.post("/", createStats);
router.patch("/:id", updateStats);
router.delete("/:id", deleteStats);

export default router;
