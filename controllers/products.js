const express = require('express');

const productRouter = express.Router();

const Product = require('../models/product.js')


// Index
productRouter.get('/products', async (req, res) => {
    try {
        res.json(await Product.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});
