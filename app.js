const express=require('express')
const mongoose=require('mongoose')
const RaagasRoutes=require('./Routes/raaga.routes')
const createError=require('http-errors')
const dotenv=require('dotenv').config()
const app=express();
app.use(express.json())

//Initialize DB
require('./initDB')()


//for raagas route

app.use('/raagas',RaagasRoutes);

//for route which doesn't exist
app.use((req,res)=>{
    res.status(404).send("Error: Not Found")
})

const PORT=process.env.PORT||3000

app.listen(PORT,()=>{
  console.log("Server Listening ")
})