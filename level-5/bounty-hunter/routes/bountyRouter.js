const express = require("express")
const bountyRouter = express.Router()
const { v4: uuid } = require('uuid');

const bounties = [
    {firstName: "Yoda", lastName: "?", living: true, bountyAmmt: 990101, type:"jedi", _id: uuid()},
    {firstName: "Count", lastName: "Dooku", living: false, bountyAmmt: 2000, type:"sith", _id: uuid()},
    {firstName: "Boba", lastName: "Fet", living: true, bountyAmmt: 4056, type:"jedi", _id: uuid()},
    {firstName: "Kylo", lastName: "Ren", living: false, bountyAmmt: 9000, type:"sith", _id: uuid()},
    {firstName: "Darth", lastName: "Maul", living: true, bountyAmmt: 9999999, type:"sith", _id: uuid()},

]



bountyRouter.get( "/", (req, res)=>{
    res.send(bounties)
   })
   

bountyRouter.post( "/", (req, res)=>{
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(`successfully added ${newBounty.firstName}  ${newBounty.lastName}!`)
   })



module.exports = bountyRouter
