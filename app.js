const express=require('express')
const mongoose=require('mongoose')
const createError=require('http-errors')
const app=express();
app.use(express.json())

//Initialize DB
require('./initDB')()

//for raagas route
const RaagasRoutes=require('./Routes/raaga.routes')
app.use('/raagas',RaagasRoutes);

//for route which doesn't exist
app.use((req,res)=>{
    res.status(404).send("Error: Not Found")
})


app.listen(3000,()=>{
  console.log("Server Listening at 3000..")
})