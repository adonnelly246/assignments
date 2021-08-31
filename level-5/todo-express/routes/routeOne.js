const express = require("express")
const RouteOne = express.Router()
const { v4: uuid } = require('uuid');



const todos = [
{
    name: "Laundry",
    description: "wash and dry the laundry",
    imageUrl: "http://www.myimage....",
    completed: false,
    id: uuid()
},

{
    name: "Dry cleaning",
    description: "pick up dry cleaning",
    imageUrl: "http://www.myimage....",
    completed: false,
    id: uuid()
},

{
    name: "Wash dogs",
    description: "give the dogs a bath and brush them",
    imageUrl: "http://www.myimage....",
    completed: true,
    id: uuid()
},

]

//GET all
RouteOne.get('/', (req, res, next)=>{
    res.send(todos)
})

//GET one
RouteOne.get("/:todoId", (req, res)=>{
    const todoId = req.params.tvshowId
    const foundTodo = todos.find(item=> item.id === todoId)
    res.send(foundTodo)
})

//POST
RouteOne.post( "/", (req, res)=>{
    const newItem = req.body
    newItem._id = uuid()
    todos.push(newItem)
    res.send(`successfully added ${newItem.name}!`)
})


//DELETE 
RouteOne.delete("/:todoId", (req,res)=>{     
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(item=> item.id === todoId)
    todos.splice(todoIndex, 1)
    res.send(`Successfully removed!`)
}) 

//UPDATE
RouteOne.put("/:todoId", (req,res)=>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(item=> item.id === todoId)
    const updateObject = req.body

    const updatedTodo = Object.assign(todos[todoIndex], updateObject)
       res.send(updatedTodo)
})

module.exports = RouteOne