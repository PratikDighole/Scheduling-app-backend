const express=require('express')
const mongoose=require('mongoose')
const app=express();
app.use(express.json())

mongoose.connect('mongodb+srv://sandbox.jcpp0.mongodb.net',{
    
    dbName:'raag_api_data',
    user:'atharav345',
    pass:'lmn123',
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


app.listen(3000,()=>{
  console.log("Server Listening at 3000..")
})