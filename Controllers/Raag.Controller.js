const Raag=require('../Models/Product.model')

module.exports={
  GetAllRaags:async(req,res)=>{

    try {

        const results=await Raag.find({},{__v:0})
        if(!results) return res.send("Raag Not Found")
        //find method has two parameters :query and projection
        //to get raag of kalyan thaat
      
        // const results=await Raag.find({thaat:"kalyan"},{})
        
       // to exclude and include we need to pass projecction in find
       //to  include only name of raag with kalyan Thaat
        // const results=await Raag.find({thaat:"kalyan"},{name:1})

        res.send(results)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message:"Unable to get raag in DB"
        })
    }
},
  
  AddRaag :async(req,res)=>{
    try{    
    const raag=new Raag(req.body)
    const result=await raag.save()
    res.send(result)
    }catch(error){
        res.status(500).json({
        message:"Unable to add raag in DB"
        })
    }
    // console.log(req.body)
    // const raag=new Raag({
    //     name:req.body.name,
    //     thaat:req.body.thaat,
    //     vadi:req.body.vadi,
    //     samvadi:req.body.samvadi,
    //     time:req.body.time
    // })
    // raag.save()
    // .then(result=>{
    //     console.log(result)
    //     res.send(result)
    // })
    // .catch(err=>console.log(err.message))
   
},
  GetSingleRaag:async(req,res)=>{
    const single_raag=req.params.name
    try {
        const raag=await Raag.findOne({name:single_raag})
        if(!raag) return res.status(500).json({
            message:"Raag Not Found"
        })
        res.send(raag)
    } catch (error) {
        res.status(500).json({
            message:"Unable to get raag from DB"
        })
    }
},
 GetRaagwithThatt:async(req,res)=>{
    const single_thatt=req.params.name
    try {
        const raag=await Raag.findOne({thaat:single_thatt})
        if(!raag) return res.status(500).json({
            message:"Raag with thatt not Found"
        })
        res.send(raag)
    } catch (error) {
        res.status(500).json({
            message:"Unable to get raag from DB"
        })
    }
},
   UpdateSingleRaag:async(req,res)=>{
   try{
    const update_name=req.params.name
    const updates=req.body
    if(!updates) {return res.status(400).json({
        message:"Invalid Request"
    })}
    const options={new:true}
    const update_result=await Raag.findOneAndUpdate({name:update_name},updates,options);
    if(!update_result) return res.status(400).json({
        message:"Raag Not Found"
    })
    res.send(update_result)
   }catch(error){
    res.status(500).json({
        message:"Unable to update raag from DB"
    })
   }
},

  DeleteSingleRaag:async(req,res)=>{
    const name=req.params.name
   
    try {
        const answer=await Raag.findOneAndDelete({name:name})
        if(!answer) return res.status(400).json({"message":"Raag does not exist "})
        res.send(answer)
    } catch (error) {
        res.status(500).json({
            message:"Unable to update raag from DB"
        })
    }
}
}