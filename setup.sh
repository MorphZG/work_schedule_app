#!/bin/bash

# Function to display messages
function print_message() {
    echo "-----------------------------------------"
    echo "$1"
    echo "-----------------------------------------"
}

# Clone the repository
print_message "Cloning the repository..."
git clone https://github.com/MorphZG/work_schedule_app.git || { echo "Failed to clone repository"; exit 1; }
cd work_schedule_app || { echo "Failed to navigate to project directory"; exit 1; }

# Backend setup
print_message "Setting up the backend..."
cd backend || { echo "Backend directory not found"; exit 1; }
npm install || { echo "Failed to install backend dependencies"; exit 1; }

# Create backend .env file
print_message "Creating backend .env file..."
cat <<EOL > .env
PORT=5000
MONGO_URI="mongodb+srv://<username>:<password>@<cluster_url>/db_name"
LOCALHOST="mongodb://127.0.0.1:<port_number>/<db_name>"
EOL
echo "Backend .env file created. Please replace placeholders with actual values."

# Frontend setup
print_message "Setting up the frontend..."
cd ../frontend/vite-project || { echo "Frontend directory not found"; exit 1; }
npm install || { echo "Failed to install frontend dependencies"; exit 1; }

# Create frontend .env file
print_message "Creating frontend .env file..."
cat <<EOL > .env
API_URL=
EOL
echo "Frontend .env file created. Please set the API_URL as needed."

# Summary and instructions
print_message "Setup Complete!"
echo "1. To start the backend server: cd backend && npm run dev"
echo "2. To start the frontend server: cd frontend/vite-project && npm run dev"
echo "3. Frontend: http://localhost:5173"
echo "4. Backend: http://localhost:3000"