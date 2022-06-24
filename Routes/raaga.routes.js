const express=require('express')
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).send('Getting all raagas')
})

router.post('/',(req,res)=>{
    res.status(200).send('adding  raagas')
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