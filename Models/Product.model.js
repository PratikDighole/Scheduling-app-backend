const mongoose=require('mongoose')
const Schema =mongoose.Schema

const TaskSchema= new Schema ({
    ID:{
        type:Number,
        required:true
    } ,
    Title:{
       type:String,
       required:true 
    },
    DayTime:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Timestart:{
        type:String,
        required:true
    },
    TimeEnd:{
        type:String,
        required:true
    }
})

const Task=mongoose.model('raag',TaskSchema)
module.exports=Task;