const express = require("express") 
const thingRouter = express.Router() 
const { v4: uuid } = require('uuid');

const things = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid()
    }
]


//GET All
thingRouter.get( "/", (req, res)=>{
    res.send(things)

})


// thingRouter.get("/:type", (req,res)=>{
//     const thingId = req.params.thingId
//     const foundThing = things.find(item=>{item._id === thingId})
//     res.send(foundThing)
// })

//GET by type
thingRouter.get("/type", (req,res)=>{
    const type = req.query.type
    const filteredThings = things.filter(item=>{item.type === type})
    res.send(filteredThings)
})



module.exports = thingRouter
