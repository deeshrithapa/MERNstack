//model-controller-route-app.js

const express = require('express');
const createUser = require('../Contollers/userControllers')
const router= express.Router();

//route to create user
router.post('/createUser', createUser);

module.exports = router;