import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";
import Employee from "../models/Employee.js";

// Mock the Employee model
vi.mock("../models/Employee.js");

describe("Employee Controller", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Test for getAllEmployees
  describe("getAllEmployees", () => {
    it("should return all employees", async () => {
      const mockEmployees = [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Doe" },
      ];
      Employee.find.mockResolvedValue(mockEmployees);

      const mockReq = {};
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      await getAllEmployees(mockReq, mockRes);

      expect(Employee.find).toHaveBeenCalled();
      expect(mockRes.json).toHaveBeenCalledWith(mockEmployees);
    });

    it("should handle errors", async () => {
      const errorMessage = "Database error";
      Employee.find.mockRejectedValue(new Error(errorMessage));

      const mockReq = {};
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      await getAllEmployees(mockReq, mockRes);

      expect(Employee.find).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: errorMessage });
    });
  });

  // Test for getEmployeeById
  describe("getEmployeeById", () => {
    it("should return an employee if found", async () => {
      const mockEmployee = { id: "1", name: "John Doe" };
      Employee.findById.mockResolvedValue(mockEmployee);

      const mockReq = { params: { id: "1" } };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      await getEmployeeById(mockReq, mockRes);

      expect(Employee.findById).toHaveBeenCalledWith("1");
      expect(mockRes.json).toHaveBeenCalledWith(mockEmployee);
    });

    it("should return 404 if employee not found", async () => {
      Employee.findById.mockResolvedValue(null);

      const mockReq = { params: { id: "1" } };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      await getEmployeeById(mockReq, mockRes);

      expect(Employee.findById).toHaveBeenCalledWith("1");
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Employee not found",
      });
    });
  });

  // Test for createEmployee
  describe("createEmployee", () => {
    it("should create a new employee", async () => {
      const mockEmployee = { id: "1", name: "John Doe" };
      const mockReq = { body: mockEmployee };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      vi.spyOn(Employee.prototype, "save").mockResolvedValue(mockEmployee);

      await createEmployee(mockReq, mockRes);

      expect(Employee.prototype.save).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockEmployee);
    });

    it("should handle validation errors", async () => {
      const errorMessage = "Validation error";
      const mockReq = { body: {} };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      vi.spyOn(Employee.prototype, "save").mockRejectedValue(
        new Error(errorMessage),
      );

      await createEmployee(mockReq, mockRes);

      expect(Employee.prototype.save).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ message: errorMessage });
    });
  });

  // New test for updateEmployee
  describe("updateEmployee", () => {
    it("should update an existing employee", async () => {
      const mockEmployee = { id: "1", name: "John Doe Updated" };
      const mockReq = { params: { id: "1" }, body: mockEmployee };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      Employee.findByIdAndUpdate.mockResolvedValue(mockEmployee);

      await updateEmployee(mockReq, mockRes);

      expect(Employee.findByIdAndUpdate).toHaveBeenCalledWith(
        "1",
        mockEmployee,
        { new: true },
      );
      expect(mockRes.json).toHaveBeenCalledWith(mockEmployee);
    });

    it("should handle non-existent employee", async () => {
      const mockReq = { params: { id: "1" }, body: {} };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      Employee.findByIdAndUpdate.mockResolvedValue(null);

      await updateEmployee(mockReq, mockRes);

      expect(Employee.findByIdAndUpdate).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Employee not found",
      });
    });
  });

  // New test for deleteEmployee
  describe("deleteEmployee", () => {
    it("should delete an existing employee", async () => {
      const mockReq = { params: { id: "1" } };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      Employee.findByIdAndDelete.mockResolvedValue({});

      await deleteEmployee(mockReq, mockRes);

      expect(Employee.findByIdAndDelete).toHaveBeenCalledWith("1");
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Employee deleted successfully",
      });
    });

    it("should handle non-existent employee", async () => {
      const mockReq = { params: { id: "1" } };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      Employee.findByIdAndDelete.mockResolvedValue(null);

      await deleteEmployee(mockReq, mockRes);

      expect(Employee.findByIdAndDelete).toHaveBeenCalledWith("1");
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: "Employee not found",
      });
    });
  });
});
