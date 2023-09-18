const express=require('express')
const mongoose=require('mongoose')
const TaskRoutes=require('./Routes/Task.routes')
const createError=require('http-errors')
require('dotenv').config()
const app=express();
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
app.use(express.json())
const PORT=process.env.PORT||5000
//Initialize DB
require('./initDB')()

app.get('/', (req, res) => {
  res.send(`Server running at ${PORT}`)
})

//for tasks route
app.use('/',TaskRoutes);

app.use((req,res)=>{
  res.status(404).send("Error: Not Found")
})
app.listen(PORT,(req,res)=>{
  console.log(`Server Listening at ${PORT}`)
})