const mongoose = require('mongoose')

var itemSchema = new mongoose.Schema({
    itemName: String,
    itemMake: String,
    entryDate: String,
    category: String,
    serialNumber: String,
    itemPrice: String,
    initialPay: String,
    payInterval: String,
    color: String,
    itemDescription: String,
    numberInStock: String,
    itemPhoto: String
})


module.exports = mongoose.model("Item", itemSchema)
