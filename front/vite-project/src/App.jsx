import React, { useState } from 'react';
import axios from 'axios';

console.log()
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('staff');
  const [freeWeekends, setFreeWeekends] = useState(false);
  const [customHours, setCustomHours] = useState([
    { day: 'Monday', startHour: '', endHour: '' },
    { day: 'Tuesday', startHour: '', endHour: '' },
    { day: 'Wednesday', startHour: '', endHour: '' },
    { day: 'Thursday', startHour: '', endHour: '' },
    { day: 'Friday', startHour: '', endHour: '' },
    { day: 'Saturday', startHour: '', endHour: '' },
    { day: 'Sunday', startHour: '', endHour: '' },
  ]);

  const handleHourChange = (index, field, value) => {
    const newCustomHours = [...customHours];
    newCustomHours[index][field] = value;
    setCustomHours(newCustomHours);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare the employee data to match the Employee model
      const employeeData = {
        name,
        email,
        role,
        preferences: {
          freeWeekends,
          customHours,
        },
      };

      // Send POST request to backend API to create an employee
      const response = await axios.post(`${import.meta.env.API_URL}/api/employees`, employeeData);
      console.log('Employee created:', response.data);
      alert('Employee added successfully!');
      
      // Reset form fields
      setName('');
      setEmail('');
      setRole('staff');
      setFreeWeekends(false);
      setCustomHours(customHours.map(hour => ({ ...hour, startHour: '', endHour: '' })));
      
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Failed to add employee');
    }
  };

  return (
    <div className="App">
      <h1>Add New Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="staff">Staff</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label>
            Free Weekends:
            <input type="checkbox" checked={freeWeekends} onChange={(e) => setFreeWeekends(e.target.checked)} />
          </label>
        </div>
        <div>
          <h3>Custom Hours:</h3>
          {customHours.map((customHour, index) => (
            <div key={index}>
              <label>{customHour.day}:</label>
              <input
                type="time"
                value={customHour.startHour}
                onChange={(e) => handleHourChange(index, 'startHour', e.target.value)}
                placeholder="Start Hour"
              />
              <input
                type="time"
                value={customHour.endHour}
                onChange={(e) => handleHourChange(index, 'endHour', e.target.value)}
                placeholder="End Hour"
              />
            </div>
          ))}
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default App;
