# Work Schedule Application

A full-stack web application for managing employee work schedules, built with modern web technologies.

## Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS
- Axios for API communication

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- CORS enabled for frontend communication

## Features

- Create and manage weekly/monthly work schedules
- Randomize schedule generation
- Set employee preferences (e.g., preferred days off, specific working hours)
- Track working hours statistics
- View employee-specific statistics (e.g., number of specific weekdays worked)
- Automated schedule generation with fair weekend shift distribution
- Real-time updates through REST API

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- MongoDB (Local installation or MongoDB Atlas account)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MorphZG/work_schedule_app.git
cd work_schedule_app
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend/vite-project
npm install
```

4. Set up environment variables:
Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend/vite-project
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## API Endpoints

### Schedules
- `GET /schedule/:period` - Get schedule for specific period
- `POST /schedule` - Create new schedule
- `PUT /schedule/:id` - Update existing schedule

### Employee Preferences
- `PUT /preferences/:employeeId` - Update employee preferences
- `GET /preferences/:employeeId` - Get employee preferences

### Statistics
- `GET /statistics/:employeeId` - Get employee work statistics
- `GET /statistics/team` - Get team-wide statistics

## Development

### Code Quality
The project uses:
- ESLint for code linting
- Prettier for code formatting
- Vitest for testing

Run quality checks:
```bash
npm run lint    # Check code style
npm run format  # Format code
npm run test    # Run tests
```

## Project Structure
For detailed information about the project structure, see [dir_structure.md](./dir_structure.md)

## API Documentation
- Controllers: [controllers.md](./controllers.md)
- Models: [models.md](./models.md)
- Routes: [routes.md](./routes.md)

## Contributing

See [CONTRIBUTE.md](./contribute.md) for details on our code of conduct and the process for submitting pull requests.