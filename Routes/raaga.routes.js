const express=require('express')
const router=express.Router();

router.get('/raagas',(req,res)=>{
    res.status(200).send('Getting all raagas')
})

router.post('/raagas',(req,res)=>{
    res.status(200).send('adding  raagas')
})

router.get('/raagas/id',(req,res)=>{
    res.status(200).send('Getting a single raag with id')
})

router.patch('/raagas/id',(req,res)=>{
    res.status(200).send('Updating a single raag with id')
})
router.delete('/raagas/id',(req,res)=>{
    res.status(200).send("Deleting a single raag with id")
})




module.exports=router;