const Task=require('../Models/Product.model')

module.exports={
  Addtask :async(req,res)=>{
      try{    
          const task=new Task(req.body)
          const result=await task.save()
          // console.log(result)
          res.send(result)
          console.log('added new entry')
        }catch(error){
            console.log(error)
            res.status(500).json({
                message:"Unable to add Task in DB"
            })
    }
},
  GetSingletask:async(req,res)=>{
    const single_task=req.params.ID
    try {
        const task=await Task.findOne({ID:single_task})
        if (!task) 
            return res.status(404).json({});
        res.send(task)
    } catch (error) {
        res.status(500).json({
            message:"Unable to get task from DB"
        })
    }
},

Updatetask:async(req,res)=>{
   try{
    const update_ID=req.params.ID
    const updates=req.body
    if(!updates) {return res.status(400).json({
        message:"Invalid Request"
    })}
    const options={new:true}
    const update_result=await Task.findOneAndUpdate({ID:update_ID},updates,options);
    if(!update_result) return res.status(400).json({
        message:"task Not Found"
    })
    res.send(update_result)
   }catch(error){
    res.status(500).json({
        message:"Unable to update task from DB"
    })
   }
},


  Deletetask:async(req,res)=>{
    const ID=req.params.ID
   
    try {
        const answer=await Task.findOneAndDelete({ID:ID})
        if(!answer) return res.status(400).json({"message":"task does not exist "})
        res.send(answer)
    } catch (error) {
        res.status(500).json({
            message:"Unable to update task from DB"
        })
    }
}
}