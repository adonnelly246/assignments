const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const bounties = [
//     {firstName: "Yoda", lastName: "'The Wise One'", living: true, bountyAmmt: 990101, type:"jedi", _id: uuid()},
//     {firstName: "Count", lastName: "Dooku", living: false, bountyAmmt: 2000, type:"sith", _id: uuid()},
//     {firstName: "Grogu", lastName: "'The Child'", living: true, bountyAmmt: 99999991000, type:"jedi", _id: uuid()},
//     {firstName: "Boba", lastName: "Fet", living: true, bountyAmmt: 4056, type:"jedi", _id: uuid()},
//     {firstName: "Kylo", lastName: "Ren", living: false, bountyAmmt: 9000, type:"sith", _id: uuid()},
//     {firstName: "Darth", lastName: "Maul", living: true, bountyAmmt: 999999, type:"sith", _id: uuid()},
//     {firstName: "Darth", lastName: "Vader", living: false, bountyAmmt: 889819, type:"sith", _id: uuid()},
//     {firstName: "Rey", lastName: "Skywalker", living: true, bountyAmmt: 4000, type:"jedi", _id: uuid()},

// ]

const bountySchema = new Schema({ 
    firstName: {
        type: String,
        required: true
    },

    LastName: String,

    living: {
        type: Boolean,
        required: true
    },

    bountyAmmt: {
        type: Number,
        required: true
    },

    side:{
        type: String,
        enum: ['sith', 'jedi']
    } 

})

module.exports = mongoose.model("Bounty", bountySchema) 
