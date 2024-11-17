import Statistics from "../models/Statistics.js";

// Get overall statistics
export const getOverallStats = async (req, res) => {
  try {
    const stats = await Statistics.find();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get employee-specific statistics
export const getEmployeeStats = async (req, res) => {
  try {
    const stats = await Statistics.find({ employee: req.params.id });
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get schedule-specific statistics
export const getScheduleStats = async (req, res) => {
  try {
    const stats = await Statistics.find({ schedule: req.params.id });
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new statistics
export const createStats = async (req, res) => {
  const stats = new Statistics(req.body);
  try {
    const newStats = await stats.save();
    res.status(201).json(newStats);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update statistics
export const updateStats = async (req, res) => {
  try {
    const updatedStats = await Statistics.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStats);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete statistics
export const deleteStats = async (req, res) => {
  try {
    await Statistics.findByIdAndDelete(req.params.id);
    res.json({ message: 'Statistics deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};