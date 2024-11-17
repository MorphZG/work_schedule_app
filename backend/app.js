// backend entry point
import express from "express";
import cors from "cors";
import { connect_db } from "./config/database.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import scheduleRoutes from "./routes/scheduleRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";

const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect_db();

// Routes
// base routes
app.use("/api/employees", employeeRoutes); // 
app.use("/api/schedules", scheduleRoutes);
app.use("/api/statistics", statsRoutes);




// Basic route for testing the API
app.get("/", (req, res) => {
    res.send("success!!");
});

app.listen(port, () => {
    console.log(`waiting for requests on port: ${port}`);
});
