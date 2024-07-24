const express = require('express');
const createRecipe = require('../Contollers/RecipeControllers')
const router = express.Router();

//route to create Recipe

router.post('/createRecipe', createRecipe);

module.exports=router;