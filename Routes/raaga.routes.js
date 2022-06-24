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

router.get('/:id',(req,res)=>{
    res.status(200).send('Getting a single raag with id')
})

router.patch('/:id',(req,res)=>{
    res.status(200).send('Updating a single raag with id')
})
router.delete('/:id',(req,res)=>{
    res.status(200).send("Deleting a single raag with id")
})




module.exports=router;