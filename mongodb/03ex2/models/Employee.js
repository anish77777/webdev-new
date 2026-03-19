import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: String,
    language: String,
    salary: Number,
    city: String,
    isManager: Boolean
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
