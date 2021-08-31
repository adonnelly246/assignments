const express = require("express") 
const maxMinRouter = express.Router() 
const { v4: uuid } = require('uuid');
const thingRouter = "./thingRouter.js"

maxMinRouter.get('/search/price', (req, res)=>{

})




module.exports = maxMinRouter