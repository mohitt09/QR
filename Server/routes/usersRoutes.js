const express = require('express')
const {getAllUsers, createUser} = require('../controllers/userController')
const Router = express()

Router.get('/',getAllUsers);
Router.post('/', createUser);

module.exports = Router