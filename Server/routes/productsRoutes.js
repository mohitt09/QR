const express = require('express')
const {getAllProducts, createProduct} = require('../controllers/productController')
const Router = express()

Router.get('/',getAllProducts)
Router.post('/',createProduct)

module.exports = Router