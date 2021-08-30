// (GET, GET(one), POST, PUT, DELETE, )
const express = require('express')
const inventory = require('../models/inventory.js')
const inventoryRouter = express.Router()


inventoryRouter.get( "/", (req, res, next)=>{
    Inventory.find((err, movies)=> {         
        if(err){ 
            res.status(500)             
            return next(err)
        }
        return res.status(200).send(inventory)     
    })
})

inventoryRouter.post( "/", (req, res, next)=>{
    const newItem = new inventory(req.body) 
    newItem.save((err, savedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})


inventoryRouter.delete("/:itemId", (req,res)=>{     
    const itemId = req.params.itemId
    const itemIndex = inventory.findIndex(item=> item._id === itemId)
    movies.splice(itemIndex, 1)
    res.send(`successfully removed`)
})


inventoryRouter.put("/:itemId", (req,res)=>{
    const itemId = req.params.itemId
    const itemIndex = inventory.findIndex(item=> item._id === itemId)
    const updatedObj = req.body
    const updatedItem = Object.assign(inventory[itemIndex], updatedObj)
       res.send(updatedItem)
})



module.exports = inventoryRouter