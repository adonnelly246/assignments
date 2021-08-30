const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Movie blueprint
const inventorySchema = new Schema({
    name:{
        type: String,
        requred: true
    },
    material: {
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    season: String

})

module.exports = mongoose.model("Inventory", inventorySchema)