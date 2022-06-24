const mongoose=require('mongoose')
const Schema =mongoose.Schema

const RaagSchema= new Schema ({
     
    name:{
       type:String,
       required:true 
    },
    thaat:{
        type:String,
        required:true
    },
    vadi:{
        type:String,
        required:true
    },
    samvadi:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

const Raag=mongoose.model('raag',RaagSchema)
module.exports=Raag;