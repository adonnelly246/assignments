const express = require("express") //import express
const app = express()   //declare a server variable - 'app' is convention
const morgan = require('morgan')
const mongoose = require('mongoose')



app.use(express.json()) 
app.use(morgan('dev')) 


//connect to Database
mongoose.connect('mongodb://localhost:27017/inventorydb', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModified: false,
        
    },
    () => console.log('Connected to the Database')
)
//Routes//
app.use("/inventory", require("./routes/inventoryRouter.js"))

//error handling (morgan)
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})      
})

app.listen(8000, ()=>{
    console.log("The server is running on port 8000")
  })
  
  