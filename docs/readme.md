---
date:
tags:
  - webdev
  - coding
  - project
title: Work schedule app
type: project
URL: https://github.com/MorphZG/upravljanje-radom-u-smjenama
---

# Work schedule app

## General features

- select time period (weekly or monthly)
- randomise the schedule
- input preferences if some employee have special needs like free weekend or different working hours for particular day
- track a very simple statistic about working hours
- option for each employee to display a graph to see how many mondays he worked in a month, how many saturdays, how many fridays.... display a graph for each day of the week in a set time period, how many working hours he had on each day
- option to build automatic schedule with balanced shifts so each employee have a fair number of working weekends

## Project plan

### Data Modeling and Database Setup

- Employees Collection: Store each employee's information (e.g., name, ID, role, preferences like free weekends or custom hours).
- Schedule Collection: Each document represents a period (weekly/monthly), with fields for date range, list of shifts, employee assignments, etc.
- Statistics Collection: Track data on how many shifts each employee has worked on specific days, hours worked, and so on.

### Backend (Node.js + Express)

#### API Endpoints:

  - GET `/schedule/:period`: Fetches the schedule for a specific period (weekly/monthly).
  - POST `/schedule`: Generates a new schedule, taking into account employee preferences and balanced weekend shifts.
  - PUT `/preferences/:employeeId`: Allows updating employee preferences.
  - GET `/statistics/:employeeId`: Fetches the specific statistics and weekday work frequency for an employee.
  - POST `/randomize-schedule`: An endpoint to create a randomized schedule within the selected period.

#### Logic for Balanced Scheduling:

Use algorithms to ensure fair distribution of weekend shifts. Consider constraints like free days and shift preferences.

### Frontend (React)

- Schedule Display: A calendar or table view with shifts for the selected period, showing which employee is assigned to each slot.
- Statistics and Graphs: For each employee, provide a visual (e.g., bar chart or pie chart) showing days worked over the selected period. Libraries like `Chart.js` or `Recharts` would be useful here.
- Preferences Form: A form where administrators can update employee preferences.
- Schedule Generation and Randomization: Buttons for generating and randomizing the schedule, with a configuration panel to set the time period and specify balanced shifts.

### Logic and Algorithms

- Randomization & Balancing: Implement logic in the backend to randomly assign shifts but with balancing checks. This could be a mix of scheduling and optimization algorithms.
- Statistics Calculation: Create functions to compute how many hours employees worked, and how frequently they worked on each weekday.

### Testing & Iteration

- Ensure that preferences and balanced shift algorithms are tested to meet fairness and flexibility requirements.
- Implement validation checks to prevent schedule conflicts.
