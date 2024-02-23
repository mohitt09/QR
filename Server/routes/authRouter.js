const express = require('express')
const login = require('../controllers/authController')
const Router = express()

Router.post('/login',login);


module.exports = Router