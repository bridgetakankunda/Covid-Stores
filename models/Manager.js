const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

var managerSchema = new mongoose.Schema({
    firstName: String,
    surName: String,
    phoneNumber: Number,
    email: String,
    address: String,
    nin: String,
    username: {
        type: String,
        active: false
    },
    password: String,
})

managerSchema.plugin(passportLocalMongoose, {
    usernameField: 'username'
});
module.exports = mongoose.model("Manager", managerSchema)