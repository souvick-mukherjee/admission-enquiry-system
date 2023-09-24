const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    username: String,
    password: String,
});
const studentSchema = mongoose.Schema({
    fullName: String,
    stream: String,
    contactNo: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                const regex = /\d{10}/;
                return regex.test(value);
            },
            message: "username not valid!!",
        },
    },
    remarks: String,
    counselorId: String,
});
const clientSchema = mongoose.Schema({
    username: String,
    password: String,
    clientId: String,
});
const counselorSchema = mongoose.Schema({
    username: String,
    password: String,
    counselorId: String,
});

const Admin = mongoose.model("Admin", adminSchema);
const Student = mongoose.model("Student", studentSchema);
const Client = mongoose.model("Client", clientSchema);
const Counselor = mongoose.model("Councelor", counselorSchema);

module.exports = { Admin, Student, Client, Counselor };
