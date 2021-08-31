const express = require("express") 
const app = express()  
const { v4: uuid } = require('uuid');


app.use(express.json()) 


//Routes//
app.use("/toys", require("./routes/thingRouter.js"))


app.listen(5000, ()=>{
    console.log("The server is running on port 5000")
})
  

// EXTRA CREDIT:

// Write another route where an API user can filter by a maxium price AND a minium price. 
//You can make the maxium default to 1000000 and the minimum defualt to 0

// Consolidate the two end points you've already written