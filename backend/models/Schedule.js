import mongoose from "mongoose";

// each document represent a single schedule for a given period
const scheduleSchema = new mongoose.Schema(
  {
    period: {
      type: String,
      enum: ["weekly", "monthly"], // The time period for the schedule
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    shifts: [
      {
        date: { type: Date, required: true },
        employee: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Employee",
          required: true,
        },
        shiftType: {
          type: String,
          enum: ["first", "second"],
          required: true,
        },
        startHour: String, // Start time for the shift
        endHour: String, // End time for the shift
      },
    ],
  },
  { timestamps: true },
);

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;
