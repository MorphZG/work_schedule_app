import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getStatistics, updateStatistics } from '../controllers/statsController.js';
import Statistics from '../models/Statistics.js';

vi.mock('../models/Statistics.js');

describe('Statistics Controller', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getStatistics', () => {
    it('should return statistics for an employee', async () => {
      const mockStats = { employeeId: '1', totalHours: 40, averageHours: 8 };
      Statistics.findOne.mockResolvedValue(mockStats);

      const mockReq = { params: { employeeId: '1' } };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      await getStatistics(mockReq, mockRes);

      expect(Statistics.findOne).toHaveBeenCalledWith({ employeeId: '1' });
      expect(mockRes.json).toHaveBeenCalledWith(mockStats);
    });

    it('should return 404 if statistics not found', async () => {
      Statistics.findOne.mockResolvedValue(null);

      const mockReq = { params: { employeeId: '1' } };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      await getStatistics(mockReq, mockRes);

      expect(Statistics.findOne).toHaveBeenCalledWith({ employeeId: '1' });
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Statistics not found' });
    });
  });

  describe('updateStatistics', () => {
    it('should update existing statistics', async () => {
      const mockStats = { employeeId: '1', totalHours: 45, averageHours: 9 };
      const mockReq = { params: { employeeId: '1' }, body: mockStats };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      Statistics.findOneAndUpdate.mockResolvedValue(mockStats);

      await updateStatistics(mockReq, mockRes);

      expect(Statistics.findOneAndUpdate).toHaveBeenCalledWith({ employeeId: '1' }, mockStats, { new: true, upsert: true });
      expect(mockRes.json).toHaveBeenCalledWith(mockStats);
    });

    it('should create new statistics if not existing', async () => {
      const mockStats = { employeeId: '1', totalHours: 40, averageHours: 8 };
      const mockReq = { params: { employeeId: '1' }, body: mockStats };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      Statistics.findOneAndUpdate.mockResolvedValue(mockStats);

      await updateStatistics(mockReq, mockRes);

      expect(Statistics.findOneAndUpdate).toHaveBeenCalledWith({ employeeId: '1' }, mockStats, { new: true, upsert: true });
      expect(mockRes.json).toHaveBeenCalledWith(mockStats);
    });

    it('should handle errors', async () => {
      const errorMessage = 'Database error';
      const mockReq = { params: { employeeId: '1' }, body: {} };
      const mockRes = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      };

      Statistics.findOneAndUpdate.mockRejectedValue(new Error(errorMessage));

      await updateStatistics(mockReq, mockRes);

      expect(Statistics.findOneAndUpdate).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ message: errorMessage });
    });
  });
});