const express = require("express") 
const app = express()  

app.use(express.json()) 


//Routes//
app.use("/todos", require("./routes/routeOne.js"))



app.listen(8000, ()=>{
    console.log("The server is running on port 8000")
  })