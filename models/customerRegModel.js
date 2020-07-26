const mongoose = require('mongoose')

var customerSchema = new mongoose.Schema({
    firstName: String,
    surName: String,
    phoneNumber: Number,
    email: String,
    address: String,
    nin: String,
})


module.exports = mongoose.model("Customer", customerSchema)