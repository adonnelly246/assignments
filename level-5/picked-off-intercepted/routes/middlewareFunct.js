const express = require("express")
const middlewareFunct= express.Router()
const { v4: uuid } = require('uuid');



middlewareFunct.use("/", (req, res, next)=>{
    req.body._id =  uuid()
    next()
})
  


module.exports = middlewareFunct
