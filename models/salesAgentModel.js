const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

var agentSchema = new mongoose.Schema({
    firstName: String,
    surName: String,
    phoneNumber: Number,
    email: String,
    address: String,
    nin: String,
    employeeID: {
        type: String,
        active: false
    },
    password: String,
})

agentSchema.plugin(passportLocalMongoose, {
    usernameField: 'employeeID'
});
module.exports = mongoose.model("Agent", agentSchema)