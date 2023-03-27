

const express = require("express")
const {connection} = require("./db/db")
const{approute} = require("./routes/user.route")
const {noteroute} = require("./routes/notes.route")
const {auth}= require("./middleware/middle")
require("dotenv").config()
const app = express()
app.use(express.json())

app.use("/users",approute)
//app.use(auth)

app.use(auth)
app.use("/posts", noteroute)



app.listen(process.env.port,async()=>{
    try{
       await connection
       console.log("connected")
    }
    catch(err){
      console.log("not connected")
    }
})