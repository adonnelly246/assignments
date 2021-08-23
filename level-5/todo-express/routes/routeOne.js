const express = require("express")
const RouteOne = express.Router()
const { v4: uuid } = require('uuid');
const { __esModule } = require("uuid/dist/v1");


const todos = [
{
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    id: uuid()
},

{
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    id: uuid()
},

]



module.exports = RouteOne