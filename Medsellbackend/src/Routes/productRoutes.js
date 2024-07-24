const express = require('express');
const createProduct = require('../Contollers/productControllers');
const router = express.Router();

// Route to create product
router.post('/createProduct', createProduct);

module.exports = router;
