import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, unique: true },
  cellphone: { type: String, unique: true },
  preference: {
    dayOff: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    preferedShift: {
      type: String,
      enum: ["first", "second"],
    },
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
