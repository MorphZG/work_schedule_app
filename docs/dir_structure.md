### Backend:

```bash
backend/
├── config/                   # Configuration files
│   ├── db.js                 # MongoDB connection setup
│   └── env.js                # Environment variable configuration
├── controllers/              # Request handling logic
│   ├── scheduleController.js # Scheduling logic (generate, randomize, etc.)
│   ├── employeeController.js # Employee management (preferences, etc.)
│   └── statsController.js    # Work hours statistics and analytics
├── models/                   # Database models
│   ├── Employee.js           # Employee schema/model
│   ├── Schedule.js           # Schedule schema/model
│   └── Statistics.js         # Statistics schema/model
├── routes/                   # API route definitions
│   ├── scheduleRoutes.js     # Routes for schedule operations
│   ├── employeeRoutes.js     # Routes for employee management
│   └── statsRoutes.js        # Routes for statistics
├── services/                 # Business logic and helper functions
│   ├── scheduleService.js    # Schedule generation and balancing logic
│   └── statsService.js       # Statistics computation
├── utils/                    # Utility functions (e.g., error handling)
│   ├── errorHandler.js       # Custom error handling middleware
│   └── validators.js         # Input validation functions
├── .env                      # Environment variables (e.g., DB URL)
├── server.js                 # Entry point of the backend server
└── package.json              # Node dependencies and scripts
```
### Frontend:

```bash
frontend/
├── public/                     # Static files
│   └── index.html              # Main HTML file
├── src/                        # Main source folder
│   ├── assets/                 # Images, icons, etc.
│   ├── components/             # Reusable components
│   │   ├── ScheduleTable.js    # Table to display schedules
│   │   ├── EmployeeStats.js    # Component to display statistics graph
│   │   ├── PreferencesForm.js  # Form for employee preferences
│   │   └── Navbar.js           # Navigation bar
│   ├── pages/                  # Page-level components
│   │   ├── Dashboard.js        # Main dashboard for schedule overview
│   │   ├── Schedule.js         # Page for schedule creation and viewing
│   │   └── EmployeeDetail.js   # Employee-specific view with stats and preferences
│   ├── services/               # API calls to backend
│   │   ├── scheduleService.js  # API functions for schedule operations
│   │   ├── employeeService.js  # API functions for employee management
│   │   └── statsService.js     # API functions for statistics
│   ├── utils/                  # Helper functions
│   │   └── formatDate.js       # Date formatting functions
│   ├── App.js                  # Main React component
│   ├── index.js                # Entry point for React app
│   └── styles/                 # CSS or Tailwind files
│       └── main.css            # Global styles or Tailwind imports
├── .env                        # Environment variables (API URLs, etc.)
├── package.json                # React dependencies and scripts
└── tailwind.config.js          # Tailwind CSS configuration
```
    