const express = require("express")
const bountyRouter = express.Router()
const bounties = require('../model/bountyData.js')


bountyRouter.get( "/", (req, res)=>{
    res.send(bounties)
})
   

bountyRouter.post( "/", (req, res)=>{
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(`successfully added ${newBounty.firstName}  ${newBounty.lastName}!`)
})

   //DELETE 
bountyRouter.delete("/:bountyId", (req,res)=>{     
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty=> bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Successfully removed!`)
}) 

//UPDATE
bountyRouter.put("/:bountyId", (req,res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty=> bounty._id === bountyId)
    const updateObject = req.body

    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
       res.send(updatedBounty)
})





module.exports = bountyRouter
