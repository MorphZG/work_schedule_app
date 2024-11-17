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
                "Ponedeljak",
                "Utorak",
                "Srijeda",
                "Cetvrtak",
                "Petak",
                "Subota",
                "Nedjelja",
            ],
        },
        preferedShift: {
            type: String,
            enum: ["prva", "druga"],
        },
    },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
