import { connect_db } from "./config/database.js";
import "dotenv/config";

const port = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect_db();


// Basic route for testing the API
app.get("/", (req, res) => {
  res.send("success!!");
});

app.listen(port, () => {
  console.log(`waiting for requests on port: ${port}`);
});
