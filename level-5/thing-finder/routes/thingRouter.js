const express = require("express") 
const thingRouter = express.Router() 
const { v4: uuid } = require('uuid');

const toys = [
    {
        name: "teddy bear",
        type: "animal",
        price: 10,
        _id: uuid()
    },{
        name: "g.i. Joe",
        type: "doll",
        price: 25,
        _id: uuid()
    },{
        name: "basket ball",
        type: "sport",
        price: 10,
        _id: uuid()
    },{
        name: "rockem sockem robots",
        type: "creative",
        price: 15,
        _id: uuid()
    },{
        name: "stuffed giraffe",
        type: "animal",
        price: 80,
        _id: uuid()
    },{
        name: "polly pocket",
        type: "creative",
        price: 30,
        _id: uuid()
    },{
        name: "lego set",
        type: "creative",
        price: 100,
        _id: uuid()
    }
]


//GET All
thingRouter.get( "/", (req, res)=>{
    res.send(toys)
})

//get one by id
thingRouter.get("/:toys", (req,res)=>{
    const toyId = req.params.toyId
    const foundToy = toys.find(item=>{item._id === toyId})
    res.send(foundToy)
})

//GET by type
thingRouter.get("/search/type", (req,res)=>{
    const toyType = req.query.type
    const filteredToys = toys.filter(item=> item.type === toyType)
    res.send(filteredToys)
})



module.exports = thingRouter
