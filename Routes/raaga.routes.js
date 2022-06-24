const express=require('express')
const router=express.Router();
const Raag=require('../Models/Product.model')
router.get('/',async(req,res)=>{
    try {

        const results=await Raag.find({},{__v:0})
        //find method has two parameters :query and projection
        //to get raag of kalyan thaat
      
        // const results=await Raag.find({thaat:"kalyan"},{})
        
       // to exclude and include we need to pass projecction in find
       //to  include only name of raag with kalyan Thaat
        // const results=await Raag.find({thaat:"kalyan"},{name:1})

        res.send(results)
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/',async(req,res)=>{
    try{
    const raag=new Raag(req.body)
    const result=await raag.save()
    res.send(result)
    }catch(error){
        console.log(error.messaage)
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
   
})
//Get a single Raag with its name
router.get('/:name',async(req,res)=>{
    const single_raag=req.params.name
    try {
        const raag=await Raag.findOne({name:single_raag})
        res.send(raag)
    } catch (error) {
        console.log(error.message)
    }
})

//Update Raag with it's Name
router.patch('/:name',async(req,res)=>{
   
    try {
        const update_name=req.params.name;
        const updates=req.body
        const options={new:true}
        const result_update=await Raag.findOneAndUpdate({name:update_name},updates,options)
        res.send(result_update)
    } catch (error) {
        console.log(error.message)
    }
})


//Delete a Single Raag by it's Name
router.delete('/:name',async(req,res)=>{
    const name=req.params.name
    try {
        const answer=await Raag.findOneAndDelete({name:name})
        res.send(answer)
    } catch (error) {
        console.log(error.message)
    }
})




module.exports=router;