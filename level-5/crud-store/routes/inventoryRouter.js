// (GET, GET(one), POST, PUT, DELETE, )
const express = require('express')
const Inventory = require('../models/inventory.js')
const inventoryRouter = express.Router()

//get all
inventoryRouter.get( "/", (req, res, next)=>{
    Inventory.find((err, inventory)=> {         
        if(err){ 
            res.status(500)             
            return next(err)
        }
        return res.status(200).send(inventory)     
    })
})


//get one request



//post
inventoryRouter.post( "/", (req, res, next)=>{
    const newItem = new Inventory(req.body) 
    newItem.save((err, savedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

//delete
inventoryRouter.delete("/:itemId", (req,res, next)=>{     
    Inventory.findOneAndDelete(
        {_id: req.params.inventoryId},
        (err, deletedItem)=>{   
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successully deleted ${deletedItem.name}`)
    })
})

//put
inventoryRouter.put("/:itemId", (req,res, next)=>{
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId},        
         req.body,        
         {new: true},    
         (err, updatedItem)=>{ 

             if(err){
                 res.status(500)
                 return next(err)
             }
              return res.status(201).send(updatedItem) 
         }
    )
})



module.exports = inventoryRouter