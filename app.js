const express=require('express')
const app=express();

const RaagasRoutes=require('./')

app.listen(3000,()=>{
  console.log("Server Listening at 3000..")
})