const express=require('express')
const mongoose=require('mongoose')
const app=express();


mongoose.connect('mongodb+srv://sandbox.jcpp0.mongodb.net/?retryWrites=true&w=majority',{
    
   
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Mongodb connected...')
})


//for raagas route
const RaagasRoutes=require('./Routes/raaga.routes')
app.use('/raagas',RaagasRoutes);

//for route which doesn't exist
app.use((req,res)=>{
    res.status(404).send("Error: Not Found")
})


app.listen(3001,()=>{
  console.log("Server Listening at 3000..")
})