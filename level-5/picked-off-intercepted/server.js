const express = require('express')
const app = express()
const { v4: uuid } = require('uuid');
const middlewareFunct = require('./routes/middlewareFunct.js');


app.use("/", express.json())


app.use("/dog", (req, res, next)=>{
   req.body = {name: "Bingo", gender: "male", age: 2, color: "white/black"},
    next()
})
//routes
app.use("/", require("./routes/middlewareFunct.js"))

app.get("/dog", (req,res)=>{
    res.send(req.body)
})


app.listen(9003, ()=>{
    console.log("The server is running on port 9003")
})