# Controllers in Express.js

## Role of Controllers

Controllers in Express.js applications serve as an intermediary between the routes (which define the API endpoints) and the models (which interact with the database). Their main responsibilities include:

1. Receiving requests from routes
2. Interacting with models to fetch or manipulate data
3. Processing data and applying business logic
4. Sending appropriate responses back to the client

Controllers help to keep your code organized by separating the request handling logic from the route definitions and the data models.

## Proposed Solution for This Project

Based on the current structure of your `/back` directory, here's a proposed solution for organizing controllers:

1. Create separate controller files for each model:
   - `employeeController.js`
   - `scheduleController.js`
   - `statsController.js`

2. In each controller file, define functions that correspond to the CRUD operations and any other specific operations related to that model.

3. Import the respective model in each controller file.

4. Implement the controller functions using async/await syntax for better readability and error handling.

5. Use these controller functions in your route files instead of the current inline route handlers.

Here's an example of how you could structure your `employeeController.js`:

```javascript
import Employee from "../models/Employee.js";

// Get all employees
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single employee by ID
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new employee
export const createEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an employee
export const updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an employee
export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

You would create similar controller files for `scheduleController.js` and `statsController.js`, adapting the functions to the specific needs of each model.

To use these controllers in your routes, you would update your `employeeRoutes.js` file like this:

```javascript
import express from "express";
import { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.post("/", createEmployee);
router.patch("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;
```

This structure separates concerns, making your code more modular, easier to maintain, and simpler to test. It also allows for better error handling and consistency across your API endpoints.