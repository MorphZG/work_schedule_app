import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  getSchedule,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} from "../controllers/scheduleController.js";
import Schedule from "../models/Schedule.js";

vi.mock("../models/Schedule.js");

describe("Schedule Controller", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getSchedule", () => {
    it("should return schedule for an employee", async () => {
      const mockSchedule = {
        employeeId: "1",
        shifts: [{ date: "2023-05-01", hours: 8 }],
      };
      Schedule.findOne.mockResolvedValue(mockSchedule);

      const mockReq = { params: { employeeId: "1" } };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      await getSchedule(mockReq, mockRes);

      expect(Schedule.findOne).toHaveBeenCalledWith({ employeeId: "1" });
      expect(mockRes.json).toHaveBeenCalledWith(mockSchedule);
    });

    it("should return 404 if schedule not found", async () => {
      Schedule.findOne.mockResolvedValue(null);

      const mockReq = { params: { employeeId: "1" } };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      await getSchedule(mockReq, mockRes);

      expect(Schedule.findOne).toHaveBeenCalledWith({ employeeId: "1" });
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Schedule not found",
      });
    });
  });

  describe("createSchedule", () => {
    it("should create a new schedule", async () => {
      const mockSchedule = {
        employeeId: "1",
        shifts: [{ date: "2023-05-01", hours: 8 }],
      };
      const mockReq = { body: mockSchedule };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      vi.spyOn(Schedule.prototype, "save").mockResolvedValue(mockSchedule);

      await createSchedule(mockReq, mockRes);

      expect(Schedule.prototype.save).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockSchedule);
    });

    it("should handle validation errors", async () => {
      const errorMessage = "Validation error";
      const mockReq = { body: {} };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      vi.spyOn(Schedule.prototype, "save").mockRejectedValue(
        new Error(errorMessage),
      );

      await createSchedule(mockReq, mockRes);

      expect(Schedule.prototype.save).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ message: errorMessage });
    });
  });

  describe("updateSchedule", () => {
    it("should update an existing schedule", async () => {
      const mockSchedule = {
        employeeId: "1",
        shifts: [{ date: "2023-05-01", hours: 9 }],
      };
      const mockReq = { params: { employeeId: "1" }, body: mockSchedule };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      Schedule.findOneAndUpdate.mockResolvedValue(mockSchedule);

      await updateSchedule(mockReq, mockRes);

      expect(Schedule.findOneAndUpdate).toHaveBeenCalledWith(
        { employeeId: "1" },
        mockSchedule,
        { new: true },
      );
      expect(mockRes.json).toHaveBeenCalledWith(mockSchedule);
    });

    it("should handle non-existent schedule", async () => {
      const mockReq = { params: { employeeId: "1" }, body: {} };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      Schedule.findOneAndUpdate.mockResolvedValue(null);

      await updateSchedule(mockReq, mockRes);

      expect(Schedule.findOneAndUpdate).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Schedule not found",
      });
    });
  });

  describe("deleteSchedule", () => {
    it("should delete an existing schedule", async () => {
      const mockReq = { params: { employeeId: "1" } };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      Schedule.findOneAndDelete.mockResolvedValue({});

      await deleteSchedule(mockReq, mockRes);

      expect(Schedule.findOneAndDelete).toHaveBeenCalledWith({
        employeeId: "1",
      });
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Schedule deleted successfully",
      });
    });

    it("should handle non-existent schedule", async () => {
      const mockReq = { params: { employeeId: "1" } };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      Schedule.findOneAndDelete.mockResolvedValue(null);

      await deleteSchedule(mockReq, mockRes);

      expect(Schedule.findOneAndDelete).toHaveBeenCalledWith({
        employeeId: "1",
      });
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Schedule not found",
      });
    });
  });
});
