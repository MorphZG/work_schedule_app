import mongoose from "mongoose";

const statisticsSchema = new mongoose.Schema(
    {
        employee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
            required: true,
        },
        period: {
            type: String,
            enum: ["tjedno", "mjesecno"],
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
        daysWorked: [
            {
                // Track each day of the week with total hours worked
                day: {
                    type: String,
                    enum: [
                        "Ponedeljak",
                        "Utorak",
                        "Srijeda",
                        "Cetvrtak",
                        "Petak",
                        "Subota",
                        "Nedjelja",
                    ],
                },
                hours: { type: Number, default: 0 },
            },
        ],
        totalHours: {
            // Sum of hours worked in the period
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const Statistics = mongoose.model("Statistics", statisticsSchema)

export default Statistics
