const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: String,
    surName: String,
    phoneNumber: Number,
    email: String,
    address: String,
    nin: String,
    username: {
        type: String,
        active: false,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
})

employeeSchema.plugin(passportLocalMongoose, { usernameField: 'username' });
module.exports = mongoose.model("Employee", employeeSchema)