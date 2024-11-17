# Models Documentation

This document provides an explanation of the models used in the application.

## Overview
The application uses three main models that work together to manage employee scheduling and track work statistics:
- Employee: Stores employee information and their work preferences
- Schedule: Manages work schedules for different time periods
- Statistics: Tracks working hours and patterns for each employee

## Employee Model
The Employee model stores essential information about each employee and their work preferences:

### Fields:
- `fName`: String (required) - Employee's first name
- `lName`: String (required) - Employee's last name
- `email`: String (unique) - Employee's email address
- `cellphone`: String (unique) - Employee's phone number
- `preference`: Object containing:
  - `dayOff`: String - Preferred day off (one of: "Ponedeljak", "Utorak", "Srijeda", "Cetvrtak", "Petak", "Subota", "Nedjelja")
  - `preferedShift`: String - Preferred shift type (either "prva" or "druga")

## Schedule Model
The Schedule model manages work schedules for different time periods:

### Fields:
- `period`: String (required) - Schedule period type ("tjedno" for weekly or "mjesecno" for monthly)
- `startDate`: Date (required) - Schedule start date
- `endDate`: Date (required) - Schedule end date
- `shifts`: Array of shift objects containing:
  - `date`: Date (required) - Date of the shift
  - `employee`: ObjectId (required) - Reference to the Employee model
  - `shiftType`: String (required) - Type of shift ("prva" or "druga")
  - `startHour`: String - Start time of the shift
  - `endHour`: String - End time of the shift
- `timestamps`: Automatically tracks creation and update times

## Statistics Model
The Statistics model tracks working hours and patterns for employees:

### Fields:
- `employee`: ObjectId (required) - Reference to the Employee model
- `period`: String (required) - Statistics period type ("tjedno" for weekly or "mjesecno" for monthly)
- `startDate`: Date (required) - Start date of the statistics period
- `endDate`: Date (required) - End date of the statistics period
- `daysWorked`: Array of objects tracking work by day:
  - `day`: String - Day of the week (one of: "Ponedeljak", "Utorak", "Srijeda", "Cetvrtak", "Petak", "Subota", "Nedjelja")
  - `hours`: Number - Hours worked on that day (defaults to 0)
- `totalHours`: Number - Total hours worked in the period (defaults to 0)
- `timestamps`: Automatically tracks creation and update times

## Relationships
- The Schedule model references Employee through the `employee` field in each shift
- The Statistics model references Employee through the `employee` field
- Both Schedule and Statistics models track time periods (weekly or monthly) and use similar date range fields