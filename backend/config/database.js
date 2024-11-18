import mongoose from "mongoose";
import "dotenv/config";

const connect_db = async () => {
  try {
    const conn = await mongoose.connect(process.env.LOCALHOST, {
      autoCreate: true, // creates collection if it doesn't exist
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export { connect_db };
