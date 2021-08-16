const express = require("express") 
const app = express()   
const { v4: uuid } = require('uuid');

app.use(express.json()) 



//Routes//
app.use("/bounties", require("./routes/bountyRouter.js"))



app.listen(8000, ()=>{
    console.log("The server is running on port 9000")
  })
  
  