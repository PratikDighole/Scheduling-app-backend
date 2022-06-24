const express=require('express')
const mongoose=require('mongoose')
const RaagasRoutes=require('./Routes/raaga.routes')
const createError=require('http-errors')
const dotenv=require('dotenv').config()
const app=express();
app.use(express.json())
const PORT=process.env.PORT||3000
//Initialize DB
require('./initDB')()

app.get('/', (req, res) => {
  res.send(`Server running at ${PORT}`)
})

//for raagas route
app.use('/raagas',RaagasRoutes);

app.use((req,res)=>{
  res.status(404).send("Error: Not Found")
})
app.listen(PORT,(req,res)=>{
  console.log(`Server Listening at ${PORT}`)
})