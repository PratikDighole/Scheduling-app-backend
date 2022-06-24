const express=require('express')
const router=express.Router();
const Raag=require('../Models/Product.model')
const RaagController=require('../Controllers/Raag.Controller')


router.get('/',RaagController.GetAllRaags)

router.post('/',RaagController.AddRaag)

router.get('/:name',RaagController.GetSingleRaag)

router.patch('/:name',RaagController.UpdateSingleRaag)

router.delete('/:name',RaagController.DeleteSingleRaag)

module.exports=router;


