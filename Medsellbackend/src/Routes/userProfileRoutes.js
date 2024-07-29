const express=require('express');
const userProfile = require('../Contollers/userProfileController');
const router=express.Router();

router.post('/userProfile',userProfile);



module.exports=router;